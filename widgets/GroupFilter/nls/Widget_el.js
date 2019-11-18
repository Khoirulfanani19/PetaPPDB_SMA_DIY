// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GroupFilter/nls/strings":{_widgetLabel:"\u03a6\u03af\u03bb\u03c4\u03c1\u03bf \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",label1:"Widget \u03c6\u03b9\u03bb\u03c4\u03c1\u03b1\u03c1\u03af\u03c3\u03bc\u03b1\u03c4\u03bf\u03c2 \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",labels:{selectGroup:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03bf\u03bc\u03ac\u03b4\u03b1 \u03b3\u03b9\u03b1 \u03c6\u03b9\u03bb\u03c4\u03c1\u03ac\u03c1\u03b9\u03c3\u03bc\u03b1",criteriaHeading:"\u039a\u03c1\u03b9\u03c4\u03ae\u03c1\u03b9\u03b1 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5",
uploadHeading:"\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5",saveHeading:"\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03c4\u03c1\u03b5\u03c7\u03bf\u03c5\u03c3\u03ce\u03bd \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03c9\u03bd",layerOptionHeading:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5",
AppendDefHeading:"\u03a0\u03c1\u03bf\u03c3\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03c3\u03c4\u03bf\u03c5\u03c2 \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03bd\u03c4\u03b5\u03c2 \u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ce\u03bd\u03c4\u03b1\u03c2",PersistDefHeading:"\u0394\u03b9\u03b1\u03c4\u03ae\u03c1\u03b7\u03c3\u03b7 \u03bc\u03b5\u03c4\u03ac \u03c4\u03bf \u03ba\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf \u03c4\u03bf\u03c5 widget",RefreshValueList:"\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7 \u03c4\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd \u03c3\u03c4\u03b7\u03bd \u03c0\u03c4\u03c5\u03c3\u03c3\u03cc\u03bc\u03b5\u03bd\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
RefreshHeading:"\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd"},buttons:{save:"\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",addCriteria:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03ba\u03c1\u03b9\u03c4\u03b7\u03c1\u03af\u03c9\u03bd",applyCriteria:"\u0395\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae",removeCriteria:"\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac"},inputs:{optionOR:"\u0389",optionAND:"\u039a\u0391\u0399",
optionEQUAL:"\u0399\u03a3\u039f\u03a5\u03a4\u0391\u0399 \u039c\u0395",optionNOTEQUAL:"\u0394\u0395\u039d \u0399\u03a3\u039f\u03a5\u03a4\u0391\u0399 \u039c\u0395",optionGREATERTHAN:"\u039c\u0395\u0393\u0391\u039b\u03a5\u03a4\u0395\u03a1\u039f \u0391\u03a0\u039f",optionGREATERTHANEQUAL:"\u039c\u0395\u0393\u0391\u039b\u03a5\u03a4\u0395\u03a1\u039f \u0391\u03a0\u039f \u0389 \u0399\u03a3\u039f \u039c\u0395",optionLESSTHAN:"\u039c\u0399\u039a\u03a1\u039f\u03a4\u0395\u03a1\u039f \u0391\u03a0\u039f",optionLESSTHANEQUAL:"\u039c\u0399\u039a\u03a1\u039f\u03a4\u0395\u03a1\u039f \u0391\u03a0\u039f \u0389 \u0399\u03a3\u039f \u039c\u0395",
optionSTART:"\u0391\u03a1\u03a7\u0399\u0396\u0395\u0399 \u039c\u0395",optionEND:"\u03a4\u0395\u039b\u0395\u0399\u03a9\u039d\u0395\u0399 \u03a3\u0395",optionLIKE:"\u03a0\u0395\u03a1\u0399\u0395\u03a7\u0395\u0399",optionNOTLIKE:"\u0394\u0395\u039d \u03a0\u0395\u03a1\u0399\u0395\u03a7\u0395\u0399",optionONORBEFORE:"\u03a3\u03a4\u0399\u03a3 \u0389 \u03a0\u03a1\u0399\u039d \u0391\u03a0\u039f \u03a4\u0399\u03a3",optionONORAFTER:"\u03a3\u03a4\u0399\u03a3 \u0389 \u039c\u0395\u03a4\u0391 \u0391\u03a0\u039f \u03a4\u0399\u03a3",
textboxNumber:"\u039c\u03b5\u03c4\u03b1\u03be\u03cd ${0} \u03ba\u03b1\u03b9 ${1}",textboxText:"\u03a0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03c4\u03b9\u03bc\u03ae"},files:{jsonFile:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5 \u03c7\u03ac\u03c1\u03c4\u03b7"},_localized:{}}});