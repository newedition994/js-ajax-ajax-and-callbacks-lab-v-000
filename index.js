var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.");

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $('#results').html(renderSearchResults(data))
  }).fail(error => {
    displayError()
  });
};

var renderSearchResults = (results) => {
  const resultList = results.items.map(result => {
    return `<div>
      <h4><a href="test">${result.name}</a></h4>
      <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>
    </div>`
  });
  return resultList
};


$(document).ready(function (){
});
