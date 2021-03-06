export default (constraints) => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    return navigator.mediaDevices.getUserMedia(constraints)
  }

  return new Promise((resolve, reject) => {
    const getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
    if (!getMedia) reject(new Error('Browser unsupported'))
    getMedia.call(navigator, constraints, resolve, reject)
  })
}
