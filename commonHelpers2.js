import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),s="feedback-form-state",m=localStorage.getItem(s),l=JSON.parse(m);m&&(a.elements.email.value=l.email,a.elements.message.value=l.message);a.addEventListener("input",e=>{const t=JSON.stringify({email:e.currentTarget.elements.email.value.trim(),message:e.currentTarget.elements.message.value.trim()});localStorage.setItem(s,t)});a.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value,r=e.currentTarget.elements.message.value,n={email:t.trim(),message:r.trim()};t!==""&&r!==""?(console.log(n),e.currentTarget.reset(),localStorage.removeItem(s)):alert("You missed filling in some inputs. Fill in all the inputs!")});
//# sourceMappingURL=commonHelpers2.js.map
