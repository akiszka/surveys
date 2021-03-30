function loadSurvey(id) {
  var form = document.getElementById("mainForm")

  fetch('surveys/'+id+".json")
    .then(response => response.json())
    .then(data => {
      var htmlString = ""

      document.getElementById("description").innerHTML = data.description

      data.questions.forEach((question, qIndex) => {
	htmlString += `
<section class="pa4 ma3 bg-white br4">
	<p class="f3 ma3 mt1">${question.name}</p>`

	question.answers.forEach((answer, aIndex) => {
	  htmlString += `
<div class="pa1">
  <input type="${question.type}" id="q${qIndex}-${aIndex}" name="${qIndex}" value="${aIndex}">
  <label for="q${qIndex}-${aIndex}">${answer}</label>
</div>`
	})

	htmlString += '</section>'
      });

      htmlString += '<section class="pa3 pt1 ml3"><input class="pt2 pb2 pl3 pr3" type="submit" value="Wyślij"></section>'
      form.innerHTML = htmlString
    })
    .catch(q => {
      form.innerHTML = '<section class="pa4 mt1 bg-white br4"><h2 class="sans-serif">Nie znaleziono ankiety</h2></section>'
    })
}
