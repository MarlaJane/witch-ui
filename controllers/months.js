import models from '../models'

export const getAllMonths = async (request, response) => {
  try {
    const months = await models.Months.findAll()

    return response.send(months)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

export const getMonthByName = async (request, response) => {
  try {
    const { name } = request.params

    const foundName = await models.Months.findOne({
      attributes: ['id', 'name', 'affirmation', 'slug'],
      where: { name },
      include: [{
        model: models.Moons,
        attributes: ['id', 'name', 'newAndwaxing', 'full', 'waningAndDark'],
      }],
    })

    return foundName
      ? response.send(foundName)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

export const getMonthBySlug = async (request, response) => {
  try {
    const { slug } = request.params

    const foundSlug = models.Months.findOne({
      where: { slug },
    })

    return foundSlug
      ? response.send(foundSlug)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}
