export const _ADMIN_UI_PERMISSIONS = {
    dashboard: {
        view: true,
        edit: true,
        manage: true,
    },
    manage_users: {
        view: true,
        edit: true,
        manage: true,
    },
} as const;

export const _ADMIN_API_PERMISSIONS = {
    admin: {
        edit: true,
        view: true,
        manage: {
            create: true,
            delete: true,
            update: true
        }
    },
} as const;
