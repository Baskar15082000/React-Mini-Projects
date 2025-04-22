import React from 'react'

const LinearTravelAnimation = () => {
  return (
    <div>
        <div className='road'>
        <img className='tree1' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <img className='tree2' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <img className='tree3' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <img className='tree4' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <div style={{ '--delay': '0s' }} className='car'><img width={100} src={'https://media.tenor.com/3AsA7_b0FekAAAAi/sport-utility-vehicle-joypixels.gif'}/></div>
    </div>
    <div className='road'>
        <img className='tree1' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <img className='tree2' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <img className='tree3' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <img className='tree4' src={"https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-big-tree-png-image_11498504.png"}/>
        <div style={{ '--delay': '5s' }} className='car'><img width={100} src={'https://media.tenor.com/3AsA7_b0FekAAAAi/sport-utility-vehicle-joypixels.gif'}/></div>
    </div>
    </div>
  )
}

export default LinearTravelAnimation