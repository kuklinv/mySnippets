// Longhand
if (hero === "Robin") {
  callRobin();
} else if (hero === "Raven") {
  callRaven();
} else if (hero === "Starfire") {
  callStarfire();
} else if (hero === "BeastBoy") {
  callBeastBoy();
} else {
  throw new Error("No such hero is available...!!! - " + type);
}

// Shorthand
var heroNeeded = {
  Robin: callRobin,
  Raven: callRaven,
  Starfire: callStarfire,
  BeastBoy: callBeastBoy
};

var func = heroNeeded[hero];
!func && throw new Error("Hero not available " + hero);
func();
