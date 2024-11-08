
import CAPITALIZE, { CAPITALIZEEACHWORD } from "./CAPITALIZE";
import COUNTTONOUN from "./COUNTTONOUN";
import CREATECLASS, { CREATECLASSNAME } from "./CREATECLASS";
import DATE from "./DATE";
import DATEHELPER from "./DATEHELPER";
import GENERATERANDOMTIMEOUTNUMBER from "./GENERATERANDOMTIMEOUTNUMBER";
import GETENVIRONMENT from "./GETENVIRONMENT";
import GETFIRSTLETTER from "./GETFIRSTLETTER";
import HASLENGTH from "./HASLENGTH";
import HASPROPERTY from "./HASPROPERTY";
import HASWINDOWOBJECT from "./HASWINDOWOBJECT";
import ISBROWSER from "./ISBROWSER";
import ISCLIENT from "./ISCLIENT";
import { ISNUM, ISFLOAT, ISSTRING, ISBOOL, ISOBJ, ISFUNC, ISARRAY, ISPOSITIVE, ISNEGATIVE } from "./ISDATATYPE";
import ISDEFINED, { STRICTDEFINED } from "./ISDEFINED";
import { ISEMPTY, ISSTRINGEMPTY, STRICTEMPTY, ISEMPTYARRAY, ISARRAYOF, ISEMPTYOBJ } from "./ISEMPTY";
import ISSERVER from "./ISSERVER";
import NOTNULL, { STRICTNOTNULL } from "./NOTNULL";
import SORT from "./SORT";
import TOSTRING from "./TOSTRING";
import TOTYPE from "./TOTYPE";
import LOWERCASE, { UNCAPITALIZE } from "./LOWERCASE";
import UNIQUE from "./UNIQUE";
import LOG, { THROWERROR } from "./LOG";
import validator, { VALIDATOR, EMAILVALIDATION, EMAILVALIDATIONWITHMESSAGE, PHONENUMBERVALIDATION, NAMEVALIDATION, PASSWORDVALIDATION, PASSWORDVALIDATIONWITHMESSAGE, URLVALIDATION, LENGTHVALIDATION, PLAINTEXTVALIDATION, INPUTVALIDATION } from "./VALIDATOR";
import { HOURSSTRINGTOTIME, TO24HOURS } from "./HOURSSTRINGTOTIME";
import { ISAM, ISPM } from "./ISAMORPM";
import HASPROPERTIES from "./HASPROPERTIES";
import { DISABLEREACTDEVTOOLS } from "./DISABLEREACTDEVTOOLS";
import { SAVELOCALSTORAGE, GETLOCALSTORAGE, REMOVELOCALSTORAGE, SAVESESSIONSTORAGE, GETSESSIONSTORAGE, REMOVESESSIONSTORAGE } from "./LOCALSTORAGE";
import { GETQUERYURL, SetRedirectUrl } from "./GETQUERYURL";
import { FORMATSTRINGTOURL, UNFORMATSTRINGTOURL } from "./FORMAT";
import { SAVECOOKIE, GETCOOKIE, REMOVECOOKIE } from "./COOKIES";
export { ITERATE, ITERATEWITHRESULTS } from "./ITERATE";
import SELECTPROPS, { REMOVEPROPS } from "./SELECTPROPS";
import REPEAT from "./REPEAT";
import REMOVEDUPLICATES, { DEEPREMOVEDUPLICATES } from "./REMOVEDUPLICATES";
export { SAVESTORAGE, REMOVESTORAGE, GETSTORAGE } from "./STORAGE";
import OMIT from "./OMIT";
import MERGEDUPLICATES from "./MERGEDUPLICATES";
import IF, { IFSTRICT } from "./IF";
import REPLACEALLSPACE, { REPLACESPACE } from "./REPLACEALLSPACE";
import HANDLELOADING from "./LOADING";
import TRANSFORMTOING from "./TRANSFORMTOING";


export {
    CAPITALIZE,
    CAPITALIZEEACHWORD,
    COUNTTONOUN,
    CREATECLASS,
    CREATECLASSNAME,
    DATE,
    DATEHELPER,
    GENERATERANDOMTIMEOUTNUMBER,
    GETENVIRONMENT,
    GETFIRSTLETTER,
    HASLENGTH,
    HASPROPERTY,
    HASWINDOWOBJECT,
    ISBROWSER,
    ISCLIENT,
    ISNUM,
    ISFLOAT,
    ISSTRING,
    ISBOOL,
    ISOBJ,
    ISFUNC,
    ISARRAY,
    ISPOSITIVE,
    ISNEGATIVE,
    ISDEFINED,
    STRICTDEFINED,
    ISEMPTY,
    ISSTRINGEMPTY,
    STRICTEMPTY,
    ISEMPTYARRAY,
    ISARRAYOF,
    ISEMPTYOBJ,
    NOTNULL,
    STRICTNOTNULL,
    SORT,
    TOSTRING,
    ISSERVER,
    TOTYPE,
    LOWERCASE,
    UNCAPITALIZE,
    UNIQUE,
    LOG,
    THROWERROR,
    validator,
    VALIDATOR,
    EMAILVALIDATION,
    EMAILVALIDATIONWITHMESSAGE,
    PHONENUMBERVALIDATION,
    NAMEVALIDATION,
    PASSWORDVALIDATION,
    PASSWORDVALIDATIONWITHMESSAGE,
    URLVALIDATION,
    LENGTHVALIDATION,
    PLAINTEXTVALIDATION,
    INPUTVALIDATION,
    HOURSSTRINGTOTIME,
    TO24HOURS,
    ISAM,
    ISPM,
    HASPROPERTIES,
    DISABLEREACTDEVTOOLS,
    SAVELOCALSTORAGE,
    GETLOCALSTORAGE,
    REMOVELOCALSTORAGE,
    SAVESESSIONSTORAGE,
    GETSESSIONSTORAGE,
    REMOVESESSIONSTORAGE,
    GETQUERYURL,
    SetRedirectUrl,
    FORMATSTRINGTOURL,
    UNFORMATSTRINGTOURL,
    SAVECOOKIE,
    GETCOOKIE,
    REMOVECOOKIE,
    SELECTPROPS,
    REMOVEPROPS,
    REPEAT,
    REMOVEDUPLICATES,
    DEEPREMOVEDUPLICATES,
    OMIT,
    MERGEDUPLICATES,
    IF,
    IFSTRICT,
    REPLACEALLSPACE,
    REPLACESPACE,
    HANDLELOADING,
    TRANSFORMTOING
} 