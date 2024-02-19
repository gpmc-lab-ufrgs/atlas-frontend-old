// JSON data
var data = {
  "ADMINISTRAÇÃO PÚBLICA": [
    {"CNAE":8411600,"DESCRIÇÃO":"Administração pública em geral","CÓD.SETOR":84,"NOME SETOR":"ADMINISTRAÇÃO PÚBLICA"},
    {"CNAE":8412400,"DESCRIÇÃO":"Regulação das atividades de saúde","CÓD.SETOR":84,"NOME SETOR":"ADMINISTRAÇÃO PÚBLICA"},
    {"CNAE":8413200,"DESCRIÇÃO":"Regulação das atividades econômicas","CÓD.SETOR":84,"NOME SETOR":"ADMINISTRAÇÃO PÚBLICA"},
    // Add more data here...
  ],
  "AGRICULTURA": [
    {"CNAE":111301,"DESCRIÇÃO":"Cultivo de arroz","CÓD.SETOR":1,"NOME SETOR":"AGRICULTURA"},
    {"CNAE":111302,"DESCRIÇÃO":"Cultivo de milho","CÓD.SETOR":1,"NOME SETOR":"AGRICULTURA"},
    {"CNAE":111303,"DESCRIÇÃO":"Cultivo de trigo","CÓD.SETOR":1,"NOME SETOR":"AGRICULTURA"},
    // Add more data here...
  ]
  // Add more categories here...
};

// Get the select elements
var categorySelect = document.getElementById("category");
var descriptionSelect = document.getElementById("description");

// Populate the category select with keys from the JSON data
Object.keys(data).forEach(function (category) {
  var option = document.createElement("option");
  option.text = category;
  option.value = category;
  categorySelect.add(option);
});

// Populate the description select based on the selected category
function populateDescriptions() {
  var selectedCategory = categorySelect.value;

  // Clear the description select
  descriptionSelect.innerHTML = '<option value="">Selecione a descrição</option>';

  if (selectedCategory) {
    // Get the descriptions for the selected category
    var descriptions = data[selectedCategory];

    // Add options to the description select
    descriptions.forEach(function (item) {
      var option = document.createElement("option");
      option.text = item["DESCRIÇÃO"];
      option.value = item["CNAE"];
      descriptionSelect.add(option);
    });
  }
}

// Call populateDescriptions() initially to set the default options
populateDescriptions();




let currentScreen = 0;

function nextScreen(next) {
  document.getElementById(`screen-${currentScreen}`).style.display = "none";
  document.getElementById(`screen-${next}`).style.display = "block";
  currentScreen = next;
}

function previousScreen(previous) {
  document.getElementById(`screen-${currentScreen}`).style.display = "none";
  document.getElementById(`screen-${previous}`).style.display = "block";
  currentScreen = previous;
}

function handleSubmit(event) {
  event.preventDefault();
  // Handle form submission logic
}


