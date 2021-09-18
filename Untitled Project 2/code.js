onEvent("button1", "click", function( ) {
  createRecord("SavedText", {Text:getText("text_area1")}, function(record) {
    
  });
  write("Saved!")
});
