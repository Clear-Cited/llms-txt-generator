(function(){
  var pagesEl=document.getElementById('pages');
  function row(path,title,desc){
    var div=document.createElement('div');
    div.className='pagerow';
    div.innerHTML='<input class="p-path" type="text" placeholder="/docs/" aria-label="Page path or URL">'+
      '<input class="p-title" type="text" placeholder="Documentation" aria-label="Page title">'+
      '<input class="p-desc" type="text" placeholder="Setup, API, and guides" aria-label="Page description (optional)">'+
      '<button class="rm" type="button" aria-label="Remove this page">&times;</button>';
    if(path)div.querySelector('.p-path').value=path;
    if(title)div.querySelector('.p-title').value=title;
    if(desc)div.querySelector('.p-desc').value=desc;
    div.querySelector('.rm').addEventListener('click',function(){div.remove();});
    pagesEl.appendChild(div);
  }
  // Seed with common dev-tool pages
  row('/docs/','Documentation','Setup, API reference, and guides');
  row('/pricing/','Pricing','Plans and what each includes');
  row('/','Home','');
  document.getElementById('addrow').addEventListener('click',function(){row('','','');});

  function normDomain(d){
    d=(d||'').trim().replace(/^https?:\/\//i,'').replace(/\/+$/,'');
    return d;
  }
  function absUrl(base,path){
    path=(path||'').trim();
    if(/^https?:\/\//i.test(path)) return path;
    if(!base) return path;
    if(path && path.charAt(0)!=='/') path='/'+path;
    return 'https://'+base+path;
  }
  function build(){
    var name=document.getElementById('site').value.trim()||'Website';
    var base=normDomain(document.getElementById('domain').value);
    var summary=document.getElementById('summary').value.trim();
    var lines=['# '+name];
    if(summary){lines.push('');lines.push('> '+summary);}
    lines.push('');lines.push('## Pages');lines.push('');
    var rows=pagesEl.querySelectorAll('.pagerow');
    var any=false;
    Array.prototype.forEach.call(rows,function(r){
      var path=r.querySelector('.p-path').value.trim();
      var title=r.querySelector('.p-title').value.trim();
      var desc=r.querySelector('.p-desc').value.trim();
      if(!path && !title) return;
      var url=absUrl(base,path);
      var t=title||url;
      var line='- ['+t+']('+url+')';
      if(desc) line+=': '+desc;
      lines.push(line);
      any=true;
    });
    if(!any) lines.push('- [Home](https://'+(base||'example.com')+'/)');
    lines.push('');
    lines.push('<!-- Generated free at https://clearcited.com/llms-txt-generator/ -->');
    return lines.join('\n')+'\n';
  }
  document.getElementById('gen').addEventListener('click',function(){
    var txt=build();
    document.getElementById('result').value=txt;
    document.getElementById('out').style.display='block';
    document.getElementById('out').scrollIntoView({behavior:'smooth'});
  });
  document.getElementById('copy').addEventListener('click',function(){
    var ta=document.getElementById('result');
    ta.select();
    var ok=false;
    try{ok=document.execCommand('copy');}catch(e){}
    if(navigator.clipboard){navigator.clipboard.writeText(ta.value).then(function(){},function(){});}
    var c=document.getElementById('copied');c.style.display='block';setTimeout(function(){c.style.display='none';},2000);
  });
  document.getElementById('download').addEventListener('click',function(){
    var txt=document.getElementById('result').value||build();
    var blob=new Blob([txt],{type:'text/plain;charset=utf-8'});
    var a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='llms.txt';
    document.body.appendChild(a);a.click();
    setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},100);
  });
})();
