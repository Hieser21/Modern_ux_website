import React from 'react'
import { Feature } from '../../components'
import './features.css'
import trailer from '../../assets/trailer.webm'
const InstepFeatures = () => {
  let activeTab;
  function handleClick(str) {
    if (str == 't1') {
      return activeTab = 0
    }
      else if (str == 't2') {
        return activeTab = 1
      }
      else {
        return activeTab = 2
      }
    }
  
  return (
    <div className='' id='instep'>
     <div className="tabs tabs-boxed">
  <div className="tab" id="t1" onClick={handleClick("t1")}>Tab 1</div> 
  <div className="tab tab-active" onClick={handleClick("t2")} id="t2">Tab 2</div> 
  <div className="tab" id='t3' onClick={handleClick('t3')}>Tab 3</div>
</div>
<div className={activeTab == 0 ? "card": "card hidden"}>
	Content 1
</div>
<div className={activeTab == 1 ? "card": "card hidden"}>
	Content 2
</div>
<div className={activeTab == 2 ? "card": "card hidden"}>
	Content 3
</div>
  <iframe src={trailer} height={338} width={600} alt='Aspect trailer' style={{borderRadius: 20}} />
  </div>
  
  )
}

export default InstepFeatures
