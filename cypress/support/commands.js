Cypress.Commands.add("uploadFile", (fileName, selector) => {
  cy.get(selector).then(subject => {
    cy.fixture(fileName, "base64").then(content => {
      const el = subject[0]
      const blob = b64toBlob(content)
      const testFile = new File([blob], fileName)
      const dataTransfer = new DataTransfer()

      dataTransfer.items.add(testFile)
      el.files = dataTransfer.files
    })
  })
})

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || ""
  sliceSize = sliceSize || 512

  var byteCharacters = atob(b64Data)
  var byteArrays = []

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize)

    var byteNumbers = new Array(slice.length)
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    var byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  var blob = new Blob(byteArrays, { type: contentType })
  blob.lastModifiedDate = new Date()
  return blob
}
