import type {RouteRecordRaw} from 'vue-router';
import {RoleEnum} from '/@/enums/roleEnum'

import {defineComponent} from 'vue'

export type Component<T extends any = any>=
| ReturnType<typeof defineComponent>
| (()=>Promise<typeof import('*.vue')>)
| (()=>Promise<T>)

export interface RouteMate{
    title: string;

    ignoreAuth?:boolean;

    roles?:RoleEnum[];

    ignoreKeepAlive?: boolean;

    affix?:boolean;

    icon?: string;

    frameSrc?: string;

    transitionName?: string;

    hideBreadcrumb?: boolean;

    hideChildrenInMenu?: boolean;

    carryParam?: boolean;

    single?: boolean;

    currentActiveMenu?: string;

    hideTab?: boolean;

    hideMenu?: boolean;

    isLink?: boolean;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'>{
    name: string;
    meta: RouteMate;
    component?: Component | string;
    components?: Component;
    children?: AppRouteRecordRaw[];
    props?: Recordable;
    fullpath?: string;
}

export interface MenuTag {
    type?: 'primary'| 'error' | 'warn' | 'success';
    content?: string;
    dot?: boolean;
}

export interface Menu{
    name: string;

    icon?: string;

    path: string;

    disabled?:boolean;

    children?: Menu[];

    orderNo?: number;

    roles?: RoleEnum[];

    meta?: Partial<RouteMate>;

    tag?: MenuTag;

    hideMenu?: boolean;
}

export interface MenuModule{
    orderNo?: number;
    menu: Menu;
}

export type AppRouteModule = AppRouteRecordRaw