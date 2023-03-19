import{OpenAI as o}from"openai-streams";async function a(t){const{name:e}=await t.json();if(!e)return new Response(null,{status:400,statusText:"Did not include `name` parameter"});const n=await o("completions",{model:"text-davinci-003",prompt:`Write a nice two-sentence paragraph about a person named ${e}.

`,temperature:1,max_tokens:100});return new Response(n)}const i={runtime:"edge"};export{i as config,a as default};
