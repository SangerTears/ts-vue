/**
 * @description:menu type
 */

export enum MenuTypeEnum {
    SIDEBAR = 'sidebar',

    MIX_SIDEBAR = 'mix-sidebar',
    MIX = 'mix',
    TOP_MENU = 'top-menu',
}

export enum TriggerEnum {
    NONE = 'NONE',
    FOOTER = 'FOOTER',
    HEADER = 'HEADER'
}

export type Mode = 'vertical' | 'vertical-right' | 'horizontal'| 'inline'

// menu mode
export enum MenuModeEnum{
    VERTICAL = 'vertical',
    HORIZONTALL = 'horizontal',
    VERTICAL_RIGHT = 'vertical_right',
    INLINE = 'inline'
}

export enum MenuSplitTypeEnum{
    NONE,
    TOP,
    LEFT,
}
export enum TopMenuAlignEnum{
    CENTER = 'center',
    START = 'start',
    END = 'end',
}
export enum MixSidebarTriggerEnum{
    HOVER = 'hover',
    CLICK = 'click'
}