// Put this in Project JavaScript

function onActivated(event) {
  var exp = window.optimizely.get('state').getVariationMap()[/* String of experimentId of previous experiment goes here */];
  if(exp != undefined) {
    window["optimizely"].push({
      "type": "bucketVisitor",
      "experimentId": /* String of experiment ID of new experiment goes here */,
      "variationIndex": exp.index
    });
  }
}

window["optimizely"] = window["optimizely"] || [];
window["optimizely"].push({
  type: "addListener",
  filter: {
    type: "lifecycle",
    name: "activated"
  },
  handler: onActivated
});
