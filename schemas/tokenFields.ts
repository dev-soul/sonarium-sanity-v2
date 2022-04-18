export const tokenFields = [
    {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'address',
        title: 'Address',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'symbol',
        title: 'Symbol',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'decimals',
        title: 'Decimals',
        type: 'number',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'logoURI',
        title: 'Logo URL',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'coingeckoPlatformId',
        title: 'Coingecko Platform Id',
        description: 'If the token is not a native token, provide the coingecko platform to fetch the price from',
        type: 'string',
    },
    {
        name: 'coingeckoContractAddress',
        title: 'Coingecko Contract Address',
        description:
            'If the token is not a native token, provide the coingecko contract address to fetch the price for',
        type: 'string',
    },
];
