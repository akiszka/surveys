function loadSurvey(id) {
  fetch('surveys/'+id+".json")
    .then(response => response.json())
    .then(data => {
      var form = document.getElementById("mainForm")
      var htmlString = ""

      data.forEach((question, qIndex) => {
	htmlString += `
<section class="pa4 ma3 bg-white br4">
	<p class="f3 ma3 mt1 sans-serif">${question.name}</p>
`

	question.answers.forEach((answer, aIndex) => {
	  htmlString += `
<div class="pa1">
  <input type="${question.type}" id="q${qIndex}-${aIndex}" name="${qIndex}" value="${aIndex}">
  <label for="q${qIndex}-${aIndex}">${answer}</label>
</div>
`
	})

	htmlString += '</section>'
      });

      htmlString += '<section class="pa4 pt1 ml3 br4"><input class="pa1 pl3 pr3" type="submit" value="Wyślij"></section>'
      form.innerHTML = htmlString
    });
}