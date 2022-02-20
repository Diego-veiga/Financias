'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'banking',
      [
        {
          id: 'a329757e-e3b8-4a1b-acfb-468b0849f0c1',
          name: 'Bradesco',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: '85a14cec-3494-43a5-a34c-3d7e2be85687',
          name: 'Itaú',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: '21cf5929-bacb-4834-ade7-0b7f168ad6e3',
          name: 'Caixa',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: 'bdbb6bd8-0b64-4050-8f20-c0d44188ff84',
          name: 'Banco do Brasil',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: 'c0804130-3f1a-4ad9-a185-05ba92895cf0',
          name: 'Santander',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: 'bb7dc77f-b995-4367-857f-f486974eba6f',
          name: 'BNDES',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: 'cde6802a-a2cb-4425-b9b4-30897348e9a7',
          name: 'Inter',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: 'a769e206-770a-46a1-81ad-c740d7e40d38',
          name: 'Barisul',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
        {
          id: 'fbec276b-f109-4bf0-81a9-2cd77a8a92ee',
          name: 'Votorantin',
          default: true,
          updated_at: '2022-01-19 21:14:49',
          created_at: '2022-01-19 21:14:49',
        },
      ],
      {}
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('banking', null, {})
  },
}
