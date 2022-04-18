const lbpFields = [
    {
        name: 'id',
        type: 'string',
    },
    {
        name: 'address',
        type: 'string',
    },
    {
        name: 'name',
        title: 'Project Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'hidden',
        type: 'boolean',
        description: 'When set to true, this LBP will not appear on the website.',
    },
    {
        name: 'websiteUrl',
        title: 'Website URL',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'tokenIconUrl',
        title: 'Token Icon URL',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'bannerImageUrl',
        title: 'Banner Image URL',
        type: 'string',
    },
    {
        name: 'twitterUrl',
        title: 'Twitter URL',
        type: 'string',
    },
    {
        name: 'mediumUrl',
        title: 'Medium URL',
        type: 'string',
    },
    {
        name: 'discordUrl',
        title: 'Discord URL',
        type: 'string',
    },
    {
        name: 'telegramUrl',
        title: 'Telegram URL',
        type: 'string',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'startDate',
        type: 'string',
    },
    {
        name: 'endDate',
        type: 'string',
    },
    {
        name: 'tokenContractAddress',
        type: 'string',
    },
    {
        name: 'collateralTokenAddress',
        type: 'string',
    },
    {
        name: 'tokenAmount',
        type: 'string',
    },
    {
        name: 'collateralAmount',
        type: 'string',
    },
    {
        name: 'tokenStartWeight',
        type: 'number',
    },
    {
        name: 'collateralStartWeight',
        type: 'number',
    },
    {
        name: 'tokenEndWeight',
        type: 'number',
    },
    {
        name: 'collateralEndWeight',
        type: 'number',
    },
    {
        name: 'swapFeePercentage',
        type: 'string',
    },
    {
        name: 'chainId',
        type: 'string',
    },
    {
        name: 'adminAddress',
        type: 'string',
    },
    {
        name: 'adminIsMultisig',
        type: 'boolean',
    },
];

export const lbp = {
    name: 'lbp',
    title: 'LBP',
    type: 'document',
    fields: lbpFields,
    preview: {
        select: {
            name: 'name',
            tokenContractAddress: 'tokenContractAddress',
        },
        prepare(selection) {
            return {
                title: selection.name,
                subtitle: selection.tokenContractAddress,
            };
        },
    },
};
