import _ = require("lodash");
import Promise = require("bluebird");
import {ModelEventName} from "../model-event-name";
import {EventDispatcherService} from "../service/event-dispatcher-service";
import {ModelDescriptorService} from "../service/model-descriptor-service";
import {NetworkRepository} from "../repository/network-repository";
import {AbstractRoute} from "./abstract-route";
import stack = Plottable.Utils.Stacking.stack;

export class NetworkRoute extends AbstractRoute {
    private static instance: NetworkRoute;

    private constructor(private modelDescriptorService: ModelDescriptorService,
                        eventDispatcherService: EventDispatcherService,
                        private networkRepository: NetworkRepository) {
        super(eventDispatcherService);
    }

    public static getInstance() {
        if (!NetworkRoute.instance) {
            NetworkRoute.instance = new NetworkRoute(
                ModelDescriptorService.getInstance(),
                EventDispatcherService.getInstance()
                NetworkRepository.getInstance()
            );
        }
        return NetworkRoute.instance;
    }

    public get(interfaceId: string, stack: Array<any>) {
        let self = this,
            objectType = 'NetworkInterface',
            columnIndex = 1,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/network-interface/_/' + interfaceId
            };
        return Promise.all([
            this.networkRepository.listNetworkInterfaces(),
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(interfaces, uiDescriptor) {
            context.object = _.find(interfaces, {id: interfaceId});
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

    public selectNewInterfaceType(stack: Array<any>) {
        let self = this,
            objectType = 'NetworkInterface',
            columnIndex = 1,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/create'
            };
        return Promise.all([
            Promise.map(_.values(NetworkRepository.INTERFACE_TYPES), type => this.networkRepository.getNewInterfaceWithType(type)),
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(interfaces, uiDescriptor) {
            interfaces._objectType = objectType;
            context.object = _.compact(interfaces);
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

    public create(interfaceType: string, stack: Array<any>) {
        let self = this,
            objectType = 'NetworkInterface',
            columnIndex = 1,
            parentContext = stack[columnIndex],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/' + interfaceType
            };
        return Promise.all([
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(uiDescriptor) {
            let newInterface = _.find(parentContext.object, {_tmpId: interfaceType});
            context.userInterfaceDescriptor = uiDescriptor;
            context.object = newInterface;

            return self.updateStackWithContext(stack, context);
        });
    }

}
