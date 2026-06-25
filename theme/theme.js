export const colors = {
    background: "#fff9e3",
    foreground: "#081126",
    card: "#fff8e7",
    muted: "#f6eecf",
    mutedForeground: "rgba(0, 0, 0, 0.6)",
    primary: "#081126",
    accent: "#ea7a53",
    border: "rgba(0, 0, 0, 0.1)",
    success: "#16a34a",
    destructive: "#dc2626",
    subscription: "#8fd1bd",
};

export const spacing = {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    18: 72,
    20: 80,
    24: 96,
    30: 120,
};

export const fonts = {
    regular: 'sans-regular',
    light: 'sans-light',
    medium: 'sans-medium',
    semibold: 'sans-semibold',
    bold: 'sans-bold',
    extrabold: 'sans-extrabold',
};

export const components = {
    tabBar: {
        height: spacing[18],
        horizontalInset: spacing[5],
        radius: spacing[8],
        iconFrame: spacing[12],
        itemPaddingVertical: spacing[2],
    },
    tabs: {
        icon: {
            width: 48,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pill: {
            width: 48,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9999,
            backgroundColor: 'transparent',
        },
        active: {
            backgroundColor: colors.accent,
        },
        glyph: {
            width: 24,
            height: 24,
        }
    },
    home: {
        header: {
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        user: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        avatar: {
            width: 64,
            height: 64,
            borderRadius: 32,
        },
        userName: {
            marginLeft: 16,
            fontSize: 24,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        addIcon: {
            width: 48,
            height: 48,
            borderWidth:1,
            borderRadius:30,
            borderColor:'gray'
        },
        balanceCard: {
            my: 10,
            minHeight: 200,
            justifyContent: 'space-between',
            gap: 20,
            borderBottomLeftRadius: 32,
            borderTopRightRadius: 32,
            backgroundColor: colors.accent,
            padding: 24,
        },
        balanceLabel: {
            fontSize: 20,
            fontFamily: fonts.semibold,
            color: 'rgba(255, 255, 255, 0.8)',
        },
        balanceRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        balanceAmount: {
            fontSize: 36,
            fontFamily: fonts.extrabold,
            color: '#ffffff',
        },
        balanceDate: {
            fontSize: 20,
            fontFamily: fonts.medium,
            color: '#ffffff',
        },
        emptyState: {
            paddingVertical: 16,
            fontSize: 14,
            fontFamily: fonts.medium,
            color: 'rgba(0, 0, 0, 0.6)',
        }
    },
    list: {
        head: {
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        title: {
            fontSize: 24,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        action: {
            borderRadius: 9999,
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.2)',
            paddingHorizontal: 16,
            paddingVertical: 4,
        },
        actionText: {
            fontSize: 18,
            fontFamily: fonts.semibold,
            color: colors.primary,
        }
    },
    upcoming: {
        card: {
            marginRight: 16,
            width: 176,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            backgroundColor: colors.background,
            padding: 8,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
        },
        icon: {
            width: 56,
            height: 56,
        },
        price: {
            fontSize: 18,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        meta: {
            fontSize: 14,
            fontFamily: fonts.semibold,
            color: colors.mutedForeground,
        },
        name: {
            marginTop: 8,
            fontSize: 18,
            fontFamily: fonts.bold,
            color: colors.primary,
        }
    },
    sub: {
        card: {
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            padding: 16,
        },
        cardExpanded: {
            backgroundColor: colors.subscription,
        },
        head: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
        },
        main: {
            minWidth: 0,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
        },
        icon: {
            width: 64,
            height: 64,
            borderRadius: 8,
        },
        copy: {
            minWidth: 0,
            flex: 1,
        },
        title: {
            marginBottom: 4,
            fontSize: 18,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        meta: {
            fontSize: 14,
            fontFamily: fonts.semibold,
            color: colors.mutedForeground,
        },
        priceBox: {
            marginLeft: 12,
            flexShrink: 0,
            alignItems: 'flex-end',
        },
        price: {
            marginBottom: 4,
            fontSize: 18,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        billing: {
            fontSize: 14,
            fontFamily: fonts.medium,
            color: colors.mutedForeground,
        },
        body: {
            marginTop: 24,
            gap: 16,
        },
        details: {
            gap: 24,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
        },
        rowCopy: {
            minWidth: 0,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
        },
        label: {
            flexShrink: 0,
            fontSize: 16,
            fontFamily: fonts.medium,
            color: colors.mutedForeground,
        },
        value: {
            flex: 1,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        cancel: {
            marginTop: 8,
            alignItems: 'center',
            borderRadius: 9999,
            backgroundColor: colors.primary,
            paddingVertical: 16,
        },
        cancelDisabled: {
            backgroundColor: 'rgba(8, 17, 38, 0.35)',
        },
        cancelText: {
            fontFamily: fonts.bold,
            color: colors.background,
        }
    },
    auth: {
        safeArea: {
            flex: 1,
            backgroundColor: colors.background,
        },
        screen: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scroll: {
            flex: 1,
        },
        content: {
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingBottom: 40,
            paddingTop: 32,
        },
        brandBlock: {
            marginTop: 8,
            alignItems: 'center',
        },
        logoWrap: {
            marginBottom: 28,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
        },
        logoMark: {
            position: 'relative',
            width: 56,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            backgroundColor: colors.accent,
        },
        logoMarkText: {
            fontSize: 24,
            fontFamily: fonts.extrabold,
            color: colors.background,
        },
        wordmark: {
            fontSize: 30,
            fontFamily: fonts.extrabold,
            color: colors.primary,
        },
        wordmarkSub: {
            marginTop: -4,
            fontSize: 12,
            fontFamily: fonts.semibold,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: colors.mutedForeground,
        },
        title: {
            fontSize: 30,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        subtitle: {
            marginTop: 8,
            maxWidth: 320,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: fonts.medium,
            color: colors.mutedForeground,
        },
        card: {
            marginTop: 32,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            padding: 20,
        },
        form: {
            gap: 16,
        },
        field: {
            gap: 8,
        },
        label: {
            fontSize: 14,
            fontFamily: fonts.semibold,
            color: colors.primary,
        },
        input: {
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.background,
            paddingHorizontal: 16,
            paddingVertical: 16,
            fontSize: 16,
            fontFamily: fonts.medium,
            color: colors.primary,
        },
        inputError: {
            borderColor: colors.destructive,
        },
        error: {
            fontSize: 12,
            fontFamily: fonts.medium,
            color: colors.destructive,
        },
        helper: {
            fontSize: 14,
            fontFamily: fonts.medium,
            color: colors.mutedForeground,
        },
        button: {
            marginTop: 4,
            alignItems: 'center',
            borderRadius: 16,
            backgroundColor: colors.accent,
            paddingVertical: 16,
        },
        buttonDisabled: {
            backgroundColor: 'rgba(234, 122, 83, 0.45)',
        },
        buttonText: {
            fontSize: 16,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        secondaryButton: {
            alignItems: 'center',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: 'rgba(234, 122, 83, 0.3)',
            backgroundColor: 'rgba(234, 122, 83, 0.1)',
            paddingVertical: 12,
        },
        secondaryButtonText: {
            fontSize: 14,
            fontFamily: fonts.semibold,
            color: colors.accent,
        },
        dividerRow: {
            my: 16,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
        },
        dividerLine: {
            height: 1,
            flex: 1,
            backgroundColor: colors.border,
        },
        dividerText: {
            fontSize: 11,
            fontFamily: fonts.semibold,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: colors.mutedForeground,
        },
        linkRow: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
        },
        linkCopy: {
            fontSize: 14,
            fontFamily: fonts.medium,
            color: colors.mutedForeground,
        },
        link: {
            fontSize: 14,
            fontFamily: fonts.bold,
            color: colors.accent,
        }
    },
    modal: {
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        container: {
            marginTop: 'auto',
            maxHeight: '85%',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: colors.background,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingHorizontal: 20,
            paddingVertical: 16,
        },
        title: {
            fontSize: 20,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        close: {
            width: 32,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9999,
            backgroundColor: colors.muted,
        },
        closeText: {
            fontSize: 18,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        body: {
            gap: 20,
            padding: 20,
        }
    },
    picker: {
        row: {
            flexDirection: 'row',
            gap: 12,
        },
        option: {
            flex: 1,
            alignItems: 'center',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.background,
            paddingVertical: 12,
        },
        optionActive: {
            borderColor: colors.accent,
            backgroundColor: 'rgba(234, 122, 83, 0.1)',
        },
        optionText: {
            fontSize: 14,
            fontFamily: fonts.semibold,
            color: colors.mutedForeground,
        },
        optionTextActive: {
            color: colors.accent,
        }
    },
    category: {
        scroll: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
        },
        chip: {
            borderRadius: 9999,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.background,
            paddingHorizontal: 16,
            paddingVertical: 8,
        },
        chipActive: {
            borderColor: colors.accent,
            backgroundColor: 'rgba(234, 122, 83, 0.1)',
        },
        chipText: {
            fontSize: 14,
            fontFamily: fonts.semibold,
            color: colors.mutedForeground,
        },
        chipTextActive: {
            color: colors.accent,
        }
    }
}
export const theme = {
    colors,
    spacing,
    components,
    fonts
};