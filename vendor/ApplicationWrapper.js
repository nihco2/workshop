HELPERS = {};

(function() {
  var helper = Ember.Handlebars.helper;

  Ember.Handlebars.helper= function (name, fn){
    HELPERS[name] = fn;
    helper(name, fn);
  };
})();

TEMPLATES_ERROR = null, TEMPLATES = {};

try {
	// Ember.TEMPLATES["application"] = Ember.Handlebars.compile("<h1>My Li'l Pony Application</h1>\r\n{{#link-to 'index'}}My Li'l Pony Application{{/link-to}}\r\n{{outlet}}");
	// TEMPLATES["application"] = "<h1>My Li'l Pony Application</h1>\r\n{{#link-to 'index'}}My Li'l Pony Application{{/link-to}}\r\n{{outlet}}";
	Ember.TEMPLATES["index"] = Ember.Handlebars.compile("{{#link-to 'pony.add'}}Add{{/link-to}}\r\n<ul>\r\n{{#each pony in model}}\r\n<li>\r\n  {{#link-to 'pony.detail' pony}}\r\n    {{pony.name}}\r\n  {{/link-to}}\r\n  <a href=\"#\" {{action deletePony pony}}>supprimer</a>\r\n</li>\r\n{{/each}}\r\n<ul>");
	TEMPLATES["index"] = "{{#link-to 'pony.add'}}Add{{/link-to}}\r\n<ul>\r\n{{#each pony in model}}\r\n<li>\r\n  {{#link-to 'pony.detail' pony}}\r\n    {{pony.name}}\r\n  {{/link-to}}\r\n  <a href=\"#\" {{action deletePony pony}}>supprimer</a>\r\n</li>\r\n{{/each}}\r\n<ul>";
	Ember.TEMPLATES["pony/add"] = Ember.Handlebars.compile("<form>\r\n<label for=\"firstName\">First Name</label>\r\n{{input value=firstName}}\r\n<br>\r\n \r\n<label for=\"lastName\">Last Name</label>\r\n{{input value=lastName}}\r\n<br>\r\n \r\n<label for=\"color\">Color</label>\r\n{{input value=color}}\r\n<br>\r\n \r\n<label for=\"type\">Type</label>\r\n{{input value=type}}\r\n<br>\r\n<input type=\"submit\" {{action savePony this}}/>\r\n</form>");
	TEMPLATES["pony/add"] = "<form>\r\n<label for=\"firstName\">First Name</label>\r\n{{input value=firstName}}\r\n<br>\r\n \r\n<label for=\"lastName\">Last Name</label>\r\n{{input value=lastName}}\r\n<br>\r\n \r\n<label for=\"color\">Color</label>\r\n{{input value=color}}\r\n<br>\r\n \r\n<label for=\"type\">Type</label>\r\n{{input value=type}}\r\n<br>\r\n<input type=\"submit\" {{action savePony this}}/>\r\n</form>";
	Ember.TEMPLATES["pony/detail"] = Ember.Handlebars.compile("<span>Name: {{upperCase  model.name}}</span><br>\r\n<span>Color: {{model.color}}</span><br>\r\n<span>Type: {{model.type}}</span><br>");
	TEMPLATES["pony/detail"] = "<span>Name: {{upperCase  model.name}}</span><br>\r\n<span>Color: {{model.color}}</span><br>\r\n<span>Type: {{model.type}}</span><br>";
} catch(e) {
  TEMPLATES_ERROR = e.message
}
