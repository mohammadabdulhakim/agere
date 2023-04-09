function abbText (text:string, maxLength:number, showThatWasRest:Boolean=true) {
  if (text?.length <= Math.round(maxLength)) {
    return text;
  } else {
    return text?.slice(0, Math.round(maxLength)) + (showThatWasRest ? "..." : "");
  }
}



console.log(abbText("jmslkamfkalm",10))