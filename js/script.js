// fertilizer composition data
// order of elements: N / P / K / Ca / Mg / S / Fe / Mn / B / Zn / Cu / Mo
var calciumnitrate = {"N":15.5, "Ca":19.0};
var magnesiumsulphate = {"Mg":10.0, "S":13.0};
var monopotassiumphosphate = {"P":23.0,"K":28.3};
var potassiumnitrate = {"N":13,"K":36.666667};
var potassiumchloride = {"K":51.7};
var potassiumsulphate = {"K":41.7, "S":18.0};
var phosphoricacid = {"P":22.6};
var diammoniumphosphate = {"N":21.0, "P":23.0};
var monoammoniumphosphate = {"N":11.0, "P":20.9, "Ca":1.4, "S":2.5};
var nitricacid = {"N":14.7};
var ammoniumnitrate = {"N":34.0};
var ironchelate = {"Fe":13.3};
var manganesesulphate = {"Mn":28.0};
var manganesechelate = {"Mn":12.0};
var solubor = {"B":20.5};
var borax = {"B":11.2};
var sodiumpentaborate = {"B":18.0}
var zincsulphate = {"Zn":23.0};
var zincchelate = {"Zn":14.2};
var coppersulphate = {"Cu":25.0};
var copperchelate = {"Cu":13.0};
var sodiummolybdate = {"Mo":39.0};
var ammoniummolybdate = {"Mo":54.0};

// get the volume, concentration factors, and water analysis
var tankvolume = document.getElementById("volume").value;
var conc_major = document.getElementById("conc_major").value;
var conc_minor = document.getElementById("conc_minor").value;
// set the testValues function to the testbutton on the page
document.getElementById("testbutton").onclick = function() {testValues()};



function testValues() {
  // calculate calcium nitrate PPM
  cn_ppm = document.getElementById("CN").value;
  cn_calc = (cn_ppm / calciumnitrate.Ca / 10*tankvolume*conc_major);
  document.getElementById("cn_out").innerHTML = cn_calc;
  // calculate magnesium sulphate
  ms_ppm = document.getElementById("CN").value;
  ms_calc = (ms_ppm / magnesiumsulphate.Mg / 10*tankvolume*conc_major);
  document.getElementById("ms_out").innerHTML = ms_calc;
  // calculate monopotassium sulphate
}
