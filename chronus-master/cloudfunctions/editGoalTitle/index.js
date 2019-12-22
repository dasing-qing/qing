const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const { goalId, goalTitle } = event

  if (!goalId || !goalTitle) return

  try {
    const result = await db
      .collection('goals')
      .doc(goalId)
      .update({
        data: {
          title: goalTitle
        }
      })
    result.data = {
      goalTitle
    }
    return result
  } catch (e) {
    console.log(e)
  }
}
