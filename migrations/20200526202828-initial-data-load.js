/* eslint-disable max-len */

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('Months', [
      { name: 'January', affirmation: 'My emotions are my guide. I will follow my own light through any darkness.', slug: 'jan' },
      { name: 'February', affirmation: 'I am excited to bring new energy into my life.', slug: 'feb' },
      { name: 'March', affirmation: 'I am powerful, energized, and aligned with my spirit.', slug: 'march' },
      { name: 'April', affirmation: 'I love and forgive myself (and others).', slug: 'april' },
      { name: 'May', affirmation: 'I know who I am and I am strong in my own power', slug: 'may' },
      { name: 'June', affirmation: 'I am creatling my life and fufilling my purpose.', slug: 'june' },
      { name: 'July', affirmation: 'I am ready to see new wisdom and insights.', slug: 'july' },
      { name: 'August', affirmation: 'I am ready to let go, to release, and make space for what is next.', slug: 'aug' },
      { name: 'September', affirmation: 'I am aware and connected to the wisdom of the universe.', slug: 'sept' },
      { name: 'October', affirmation: 'I am a cosmic being.', slug: 'oct' },
      { name: 'November', affirmation: 'I rest, relax, and sit in peace with the unknown.', slug: 'nov' },
      { name: 'December', affirmation: 'I am safe and secure. I know and trust myself.', slug: 'dec' },
      { name: 'Situational', affirmation: 'I am full of magic. Wonderous things await me.', slug: 'misc' },
    ])
    await queryInterface.bulkInsert('Moons', [
      // eslint-disable-next-line object-curly-newline
      { name: 'Wolf', newAndWaxing: 'Grounding, healing, and gaining knowledge about ones self', full: 'Self-acceptence, belonging, and belief in yourself and your power.', waningAndDark: 'Letting go of insecurties. Banishing ill health and bad luck.', monthId: 1 },
      {
        name: 'Storm', newAndWaxing: 'Increasing awareness of your shadow self and subconcious.', full: 'Divining messages from dreams and emotions. Reawakening visions.', waningAndDark: 'Purification, clearing, and cleansing of emotions and space.', monthId: 2,
      },
      {
        name: 'Seed', newAndWaxing: 'Growing things, starting new projects and planning for success.', full: 'Setting intentions and visualizing the outcome, taking action, making change.', waningAndDark: 'Banishing anxiety or cynicism about change and starting new things.', monthId: 3,
      },
      {
        name: 'Pink', newAndWaxing: 'Starting new projects, taking action, and following your curiosity.', full: 'Energy, strength, growth, happieness, and resurrection of your true self.', waningAndDark: 'Reflecting on self-doubt and inaction, then banishing any issues.', monthId: 4,
      },
      {
        name: 'Flower', newAndWaxing: 'Attracting love, passion, abundance, and increasing vitality.', full: 'Ignighting your power, bringing your dreams to life, and cultivating your spirituality.', waningAndDark: 'Banishing fears and releasing resentment towards those you love.', monthId: 5,
      },
      {
        name: 'Honey', newAndWaxing: 'Increasing confidence, abundance, and making new friends.', full: 'Protection, celebrating your success, and divination for your higher self.', waningAndDark: 'Releasing self doubt, perfectionism, and negative emotions.', monthId: 6,
      },
      {
        name: 'Thunder', newAndWaxing: 'Increasing confidence in your voice, vision, and creative expression.', full: 'Divination for your highest self and discovering your souls purpose.', waningAndDark: 'Releasing emotional patterns that are holding back your true self.', monthId: 7,
      },
      {
        name: 'Corn', newAndWaxing: 'Increasing abundance, success, playfullness, and fufillment.', full: 'Connecting to your guiding light and intuition. Gratitude and protection.', waningAndDark: 'Releasing feelings of scarcity, unworthiness, or boredom.', monthId: 8,
      },
      {
        name: 'Harvest', newAndWaxing: 'Accepting loss. Recovering from grief. Preparing for change.', full: 'Assessment and balance. Finding the courage to make change, transfrom, and or let go.', waningAndDark: 'Releasing bitterness, attatchment, and things that no longer serve you.', monthId: 9,
      },
      {
        name: 'Hunters', newAndWaxing: 'Learning and healthing from the past. Increasing psychic awareness.', full: 'Transformation and divining messages from ancestors and spirit guides.', waningAndDark: 'Realease from old emotional patterns, beliefs, and attatchments.', monthId: 10,
      },
      {
        name: 'Snow', newAndWaxing: 'Increasing coziness, comfort at home, and the simple joys of life.', full: 'Interconnectedness and spiritual transcendence. Connection with others.', waningAndDark: 'Inward reflection. Releasing sorrow and feelings of isolation.', monthId: 11,
      },
      {
        name: 'Oak', newAndWaxing: 'Increasing rest and relaxation. Enhancing a jolly mood and spirit.', full: 'Rebirth and transformation. Recognizing your brilliance and light.', waningAndDark: 'Releasing to the universe. Respite and surrender to the unknown.', monthId: 12,
      },
      {
        name: 'Blue', newAndWaxing: 'Growing your power and strength. Making things happen.', full: 'Calling in that which is delightfully unexpected. Massive transformations.', waningAndDark: 'Deep silence and connection to intuitive guidance.', monthId: 13,
      },
    ])

    await queryInterface.bulkInsert('Activities', [
      { name: 'animal stich witchery', description: 'Crafting to connect your inner power.', monthId: 1 },
      { name: 'knot magic', description: 'Creating and releasing energy.', monthId: 2 },
      { name: 'candle craft', description: 'Bright magic for the dark of winter.', monthId: 3 },
      { name: 'power in the darkness', description: 'Magic to prepare for spring.', monthId: 4 },
      { name: 'scrying with air', description: 'Listening to the wisdom on the wind.', monthId: 5 },
      { name: 'the broom ride', description: 'Visualize your most magical self.', monthId: 3 },
      { name: 'awen', description: 'Inherit creative power.', monthId: 7 },
      { name: 'witches garden', description: 'Growing your magic on earth and in spirit.', monthId: 8 },
      { name: 'faerie magic and friendships', description: 'Inviting faeries to spells and rituals.', monthId: 9 },
      { name: 'scrying with fire', description: 'Divining the wisdom of the flames.', monthId: 10 },
      { name: 'wandcraft', description: 'Empower your magic and your wand.', monthId: 11 },
      { name: 'burning sprigs of gorse', description: 'Calling forth prosperity and protection.', monthId: 12 },
      { name: 'sea witchery', description: 'Rituals with the life-giving energy of water.', monthId: 13 },
      { name: 'celtic knots', description: 'Bringing protection and power.', monthId: 13 },
      { name: 'spellcraft', description: 'Making magic for the first harvest.', monthId: 13 },
      { name: 'ritual bread', description: 'Purify and prepare for new beginnings.', monthId: 13 },
      { name: 'spellcasting icepops', description: 'Looking towards a fufilling future.', monthId: 13 },
      { name: 'scrying with water', description: 'Elemental wisdom from the depths of emotion.', monthId: 13 },
      { name: 'reciprocity ritual', description: 'Live and take for the autumnal equinox.', monthId: 13 },
      { name: 'fate cake', description: 'The ability to influence your fate if consumed.', monthId: 13 },
      { name: 'keys to crossroads', description: 'Finding wisdom in the dark.', monthId: 13 },
      { name: 'samhain seance', description: 'Purify and prepare for new beginnings.', monthId: 13 },
      { name: 'ritual of the unknown', description: 'Purify and prepare for new beginnings.', monthId: 13 },
      { name: 'words of power', description: 'Ancient words to use in a spell with given intention.', monthId: 13 },
      { name: 'scrying with earth', description: 'The grounding wisdom of stones and bones.', monthId: 13 },
      { name: 'cookie spells', description: 'Kitchen witchery to attract what you desire.', monthId: 13 },
      { name: 'spellcasting soaps', description: 'Protection of the body and spirit for the upcoming year.', monthId: 13 },
      { name: 'self care and beauty rituals', description: 'Purify and prepare for new beginnings.', monthId: 13 },
      { name: 'moon baths', description: 'Grounding yourself inside and out.', monthId: 13 },

    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    await queryInterface.bulkDelete('Months')
    await queryInterface.bulkDelete('Moons')

    return queryInterface.bulkDelete('Activities')
  },
}
