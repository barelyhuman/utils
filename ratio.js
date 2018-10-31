function ratioCalculator(opts) {
  var multipliers = opts.ratio.split(":");
  var heightMultiplier = multipliers[0];
  var widthMultiplier = multipliers[1];
  var height = opts.height;
  var width = opts.width;
  var results=[];
  if (height) {
    results.push(setHeight(height, heightMultiplier, widthMultiplier));
  }
  if (width) {
    results.push(setWidth(width, heightMultiplier, widthMultiplier));
  }
  return results;
}

function setWidth(value, heightMultiplier, widthMultiplier) {
  var multiplier = widthMultiplier;
  var ratioValue = value / multiplier;
  var height = heightMultiplier * ratioValue;
  return {
    width: value.toFixed(2),
    height: height.toFixed(2)
  }

}

function setHeight(value, heightMultiplier, widthMultiplier) {
  var multiplier = heightMultiplier;
  var ratioValue = value / multiplier;
  var width = widthMultiplier * ratioValue;
  return {
    width: width.toFixed(2),
    height: value.toFixed(2)
  }

}

module.exports = ratioCalculator;

ratioCalculator({
  ratio: "7:15",
  width: 50,
  height:23
})
