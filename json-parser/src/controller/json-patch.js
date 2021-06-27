import jsonPatcher from 'fast-json-patch'
import { UnprocessableRequest } from '../errors'

export const addPatch = (req, res) => {
  const { object, patch } = req.body
  try {
    console.log({
      payload: {
        object: JSON.stringify(object),
        patch: JSON.stringify(patch),
      },
    })
    const patchedDoc = jsonPatcher.applyPatch(object, patch).newDocument
    res.status(200).json({
      message: 'document patched successfully',
      data: patchedDoc,
    })
  } catch (err) {
    console.log('rrorrrr =>', err)
    throw new UnprocessableRequest(
      err.message === "Cannot read property 'call' of undefined"
        ? 'malformed patch'
        : err.message
    )
  }
}
