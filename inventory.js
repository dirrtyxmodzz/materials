const items = [

  // 🪵 Sandpaper (Block)
  { section: "Sandpaper — Block", name: "80 Grit Block", part: "34442", full: "3M Sandpaper 80 Grit Block", img: "https://multimedia.3m.com/mws/media/2427608J/3m-cubitron-ii-hookit-clean-sanding-sheet-roll-737u-70-mm-x-12-m-80.jpg" },
  { section: "Sandpaper — Block", name: "120 Grit Block", part: "34444", full: "3M Sandpaper 120 Grit Block", img: "https://multimedia.3m.com/mws/media/2427608J/3m-cubitron-ii-hookit-clean-sanding-sheet-roll-737u-70-mm-x-12-m-80.jpg" },
  { section: "Sandpaper — Block", name: "180 Grit Block", part: "34446", full: "3M Sandpaper 180 Grit Block", img: "https://multimedia.3m.com/mws/media/2427608J/3m-cubitron-ii-hookit-clean-sanding-sheet-roll-737u-70-mm-x-12-m-80.jpg" },
  { section: "Sandpaper — Block", name: "220 Grit Block", part: "34447", full: "3M Sandpaper 220 Grit Block", img: "https://multimedia.3m.com/mws/media/2427608J/3m-cubitron-ii-hookit-clean-sanding-sheet-roll-737u-70-mm-x-12-m-80.jpg" },
  { section: "Sandpaper — Block", name: "320 Grit Block", part: "34449", full: "3M Sandpaper 320 Grit Block", img: "https://multimedia.3m.com/mws/media/2427608J/3m-cubitron-ii-hookit-clean-sanding-sheet-roll-737u-70-mm-x-12-m-80.jpg" },

  // 🪵 Sandpaper (DA)
  { section: "Sandpaper — DA", name: "80 Grit (DA 6 In)", part: "31371", full: "3M 80+ 6in Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424193J/aad-3m-cubitron-ii-fine-grades-with-css-280-electric-150-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — DA", name: "120 Grit (DA 6 In)", part: "", full: "3M 120+ 6in Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424193J/aad-3m-cubitron-ii-fine-grades-with-css-280-electric-150-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — DA", name: "180 Grit (DA 6 In)", part: "31374", full: "3M 180+ 6in Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424193J/aad-3m-cubitron-ii-fine-grades-with-css-280-electric-150-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — DA", name: "220 Grit (DA 6 In)", part: "", full: "3M 220+ 6in Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424193J/aad-3m-cubitron-ii-fine-grades-with-css-280-electric-150-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — DA", name: "320 Grit (DA 6 In)", part: "31483", full: "3M 320+ 6in Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424193J/aad-3m-cubitron-ii-fine-grades-with-css-280-electric-150-mm-disc-white.jpg?width=506" },

  // 🪵 Sandpaper (Mini DA)
  { section: "Sandpaper — Mini DA", name: "80 Grit (DA 3 In)", part: "", full: "3M 3in 80+ Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424213J/aad-3m-cubitron-ii-fine-grades-with-css-237-pneumatic-75-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — Mini DA", name: "120 Grit (DA 3 In)", part: "", full: "3M 3in 120+ Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424213J/aad-3m-cubitron-ii-fine-grades-with-css-237-pneumatic-75-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — Mini DA", name: "180 Grit (DA 3 In)", part: "31364", full: "3M 3in 180+ Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424213J/aad-3m-cubitron-ii-fine-grades-with-css-237-pneumatic-75-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — Mini DA", name: "220 Grit (DA 3 In)", part: "", full: "3M 3in 220+ Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424213J/aad-3m-cubitron-ii-fine-grades-with-css-237-pneumatic-75-mm-disc-white.jpg?width=506" },
  { section: "Sandpaper — Mini DA", name: "320 Grit (DA 3 In)", part: "31463", full: "3M 3in 320+ Hookit Disc", img: "https://multimedia.3m.com/mws/media/2424213J/aad-3m-cubitron-ii-fine-grades-with-css-237-pneumatic-75-mm-disc-white.jpg?width=506" },

  // 🧪 Fillers
  { section: "Fillers / Prep", name: "Platinum™ Plus Glaze", part: "31180", full: "3M Platinum Plus Glaze", img: "https://multimedia.3m.com/mws/media/2584758J/3m-platinum-plus-glaze-product-family.jpg?width=506" },
  { section: "Fillers / Prep", name: "Body filler (Bondo)", part: "05800", full: "3M™ Lightweight Body Filler", img: "https://multimedia.3m.com/mws/media/1051214J/3m-tm-lightweight-body-filler-05800-1-qt.jpg?width=506" },

  // 🧷 Adhesives / Sealers
  { section: "Adhesives / Sealers", name: "Bare Metal Seam Sealer", part: "08310", full: "3M Bare-Metal Seam Sealer", img: "https://multimedia.3m.com/mws/media/1210678J/3m-bare-metal-seam-sealer-beige-08310-200-ml-6-per-case.jpg?width=506" },
  { section: "Adhesives / Sealers", name: "Panel Bond (Black)", part: "08115", full: "3M Panel Bonding Adhesive", img: "https://multimedia.3m.com/mws/media/1058527J/3m-panel-bonding-adhesive-08115-200-ml-cartridge.jpg?width=506" },
  { section: "Adhesives / Sealers", name: "Structural Adhesive (Purple)", part: "07333", full: "3M Structural Adhesive", img: "https://multimedia.3m.com/mws/media/2181485J/3m-impact-resistant-structural-adhesive-07333-200-ml-cartridge.jpg?width=506" },
  { section: "Adhesives / Sealers", name: "4747 (Glue)", part: "04747", full: "3M Seam Sealer Glue", img: "https://multimedia.3m.com/mws/media/2344180J/3m-super-fast-repair-adhesive-04747-amber-47-3-ml-cartridge-6-case.jpg?width=506" },
  { section: "Adhesives / Sealers", name: "Burrito (White)", part: "08369", full: "Burrito White", img: "https://multimedia.3m.com/mws/media/2181511J/3m-msp-seam-sealer-08369-white-310-ml-flexpack.jpg?width=506" },
  { section: "Adhesives / Sealers", name: "Adhesive Promoter", part: "06396", full: "3M Adhesive Promoter", img: "https://multimedia.3m.com/mws/media/44796J/photo-3m-automotive-adhesion-promoter-06396.jpg?width=506" },

  // 🛠 Consumables
  { section: "Consumables", name: "Belt Sander 36 Grit", part: "33443", full: "3M Belt Sander 36 Grit", img: "https://multimedia.3m.com/mws/media/1057491J/3m-cubitron-ii-belt-33443-1-2inx18in-12-7mmx457-2mm-36.jpg?width=506" },
  { section: "Consumables", name: "Belt Sander 60 Grit", part: "33445", full: "3M Belt Sander 60 Grit", img: "https://multimedia.3m.com/mws/media/1057491J/3m-cubitron-ii-belt-33443-1-2inx18in-12-7mmx457-2mm-36.jpg?width=506" },
  { section: "Consumables", name: "Belt Sander 80 Grit", part: "33446", full: "3M Belt Sander 80 Grit", img: "https://multimedia.3m.com/mws/media/1057491J/3m-cubitron-ii-belt-33443-1-2inx18in-12-7mmx457-2mm-36.jpg?width=506" },
  { section: "Consumables", name: "Purple Wheels", part: "21552", full: "3M Purple Clean & Strip Wheels", img: "https://multimedia.3m.com/mws/media/2188345J/scotch-brite-roloc-clean-and-strip-xt-pro-disc-extra-coarse-tr-purple.jpg?width=506" },
  { section: "Consumables", name: "Green Corp Wheels", part: "", full: "3M Green Corp Wheels", img: "" },
  { section: "Consumables", name: "Scotch-Brite Wheels", part: "", full: "3M Scotch-Brite Wheels", img: "" },
  { section: "Consumables", name: "Cutoff Wheel Thin", part: "", full: "Cutoff Wheel Thin", img: "" },
  { section: "Consumables", name: "Cutoff Wheel Thick (Welds)", part: "", full: "Cutoff Wheel Thick", img: "" },
  { section: "Consumables", name: "Welding Paper", part: "05916", full: "Welding & Spark Deflection Paper", img: "https://multimedia.3m.com/mws/media/2242011J/3m-welding-and-spark-deflection-paper-05916-24-in-x-150-ft.jpg?width=506" },
  { section: "Consumables", name: "Scotch-Brite Pad", part: "64926", full: "3M Scotch-Brite Pad", img: "https://multimedia.3m.com/mws/media/2108761J/scotch-brite-7447-pro-hand-pad-a-o-very-fine-maroon-6-in-x-9-in.jpg?width=506" },

  // 🔥 Coatings
  { section: "Coatings", name: "Weld-Thru Primer", part: "05917", full: "3M Weld-Thru Coating II", img: "https://multimedia.3m.com/mws/media/1067395S/3m-weld-thru-coating-ii-05917-12-75-oz-net-wt-361-g.jpg" },
  { section: "Coatings", name: "Cavity Wax", part: "08852", full: "3M Cavity Wax Plus", img: "https://multimedia.3m.com/mws/media/1419997S/3m-tm-cavity-wax-plus-08852-18-oz-511-g.jpg" },
  { section: "Coatings", name: "Quick Check", part: "", full: "Quick Check", img: "" },

  // 🧤 PPE
  { section: "PPE", name: "Mask", part: "", full: "Respirator Mask", img: "" }

];
