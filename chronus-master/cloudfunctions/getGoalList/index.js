const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const { userId } = event

  if (!userId) {
    return
  }

  try {
    return await db
      .collection('goals')
      .where({
        userId
      })
      .get()
  } catch (e) {
    console.log(e)
  }
}
