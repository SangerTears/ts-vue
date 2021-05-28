// 主题页面
export const SIDE_BAR_MINI_WIDTH = 48;
export const SIDE_BAR_SHOW_TIT_MINI_WIDTH = 80;

export enum ContentEnum {
    // auto width
    FULL = 'full',
    // fixed width
    FIXED = 'fixed',
}

//  menu theme enum 
export enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light',
}
export enum SettingButtonPositionEnum {
    AUTO = 'auto',
    HEADER = 'header',
    FIXED = 'fixed',
}

/**
 * 权限设置
 */

export enum PermissionModeEnum {
    //  role
    ROLE = 'role',
    // black
    BLACK = 'back'
}

export enum RouterTransitionEnum{
    ZOOM_FADE = 'zoom-fade',
    ZOOM_OUT = 'zoom-out',
    FADE_SLIDE = 'fade-slide',
    FADE_BOTTOM = 'fade_bottom',
    FADE_SCALE = 'fade_scale'
}