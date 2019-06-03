/*
function onCampaignDecided(event) {
  if(event.data.campaign.name == "name of experiment") {
    var variation = event.data.decision.variationId;
    window["optimizely"].push({
      type: "user",
      attributes: {
        variation: variation
      }
    });
  }
}

window["optimizely"] = window["optimizely"] || [];
window["optimizely"].push({
  type: "addListener",
  filter: {
    type: "lifecycle",
    name: "campaignDecided"
  },
  handler: onCampaignDecided
});

*/

function onActivated(event) {
  var exp = window.optimizely.get('state').getVariationMap()[/* experimentId goes here */];
  if(exp != undefined) {
    window["optimizely"].push({
      "type": "bucketVisitor",
      "experimentId": "6661191859",
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
