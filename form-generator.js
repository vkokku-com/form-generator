/*
  dummy configation
*/
var formConfig = [
  {
    "type": "text",
    "name": "name",
    "placeholder": "Name",
    "errorValidations": [
      {
        "type": "required"
      }
    ]
  },
  {
    "type": "select",
    "options": ["Men", "Women", "Kids"],
    "name": "categories"
  },
  {
    "type": "radio",
    "options": [
      "Male",
      "Female"
    ],
    "name": "gender"
  },
  {
    "type": "checkbox",
    "name": "remember",
    "value": "remember"

  },
  {
    "type": "submit",
    "name": "name",
    "value": "SUBMIT"
  }
];

/*
  create input element function
*/
function createElement(elConfig, parentElem) {
  var wrapper = document.createElement("div");
  parentElem.appendChild(wrapper);
  if (elConfig.type == "select") {
    var selectList = document.createElement("select");
    selectList.name = elConfig.name;
    wrapper.appendChild(selectList);

    for (var i = 0; i < elConfig.options.length; i++) {
      var option = document.createElement("option");
      option.value = elConfig.options[i];
      option.text = elConfig.options[i];
      selectList.appendChild(option);
    }
  } else if (elConfig.type == "text") {
    var elem = document.createElement("input");
    Object.keys(elConfig).forEach(function (key) {
      elem.setAttribute(key, elConfig[key]);
    });
    wrapper.appendChild(elem);
  } else if (elConfig.type == "submit") {
    elem = document.createElement("input");
    Object.keys(elConfig).forEach(function (key) {
      elem.setAttribute(key, elConfig[key]);
    });
    wrapper.appendChild(elem);
  } else if (elConfig.type == "radio") {
    for (let k = 0; k < elConfig.options.length; k++) {
      var label = document.createElement("label");
      elem = document.createElement("input");
      elem.type = "radio";
      elem.name = elConfig.name;
      elem.value = elConfig.options[k];
      label.appendChild(elem);
      label.appendChild(document.createTextNode(elConfig.options[k]));
      wrapper.appendChild(label);
    }
  } else if (elConfig.type == "checkbox") {
    var label = document.createElement('label'),
      elem = document.createElement("input");
    elem.type = "checkbox";
    elem.name = elConfig.name;
    elem.value = elConfig.value;
    label.appendChild(document.createTextNode(elConfig.name));
    wrapper.appendChild(elem);
    wrapper.appendChild(label);
  }
}
/*
  create form group
*/
function createForm(config) {
  var formElem = document.createElement('form');
  for (var i = 0; i < config.length; i++) {
    createElement(config[i], formElem);
  }
  formElem.onsubmit = validateForm;
  document.getElementById('main').appendChild(formElem);
}

/*
  validate form
*/
var validateForm = function (event) {
  var formData = new FormData(event.target);
  var data = {};
  for (var p of formData.entries()) {
    data[p[0]] = p[1];
  }
  console.log(data);
}
createForm(formConfig);
