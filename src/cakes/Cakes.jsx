import React from 'react'

import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

import CloseIcon from "@mui/icons-material/Close";

import './CakeCard.css'

const CakeType = {
  REGULAR: 0,
  PREMIUM: 1
}

const cakes = [
  {
    name: "Rose Lychee",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "roseLychee.jpg",
    description: [
      "Our signature item features 3 layers of soft sponge with quality rose infused fresh cream, sandwiched with the juiciest of lychees.",
      "Decorated with love using Herbal leaves, twigs and dried roses.",
      "Brew the dried rose for a cup of hot rose tea and enjoy it with a slice of our Signature rose lychee cake."
    ]
  },
  {
    name: "Yuzu Raspberry",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "yuzuRaspberry.jpg",
    description: [
      "Love Yuzu? This is the cake for you.",
      "3 layers of soft sponge sandwiched with raspberry cream cheese and fresh cream.",
      "Topped with freeze dried raspberries and herbal leaves and twigs."
    ]
  },
  {
    name: "Strawberry Shortcake",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "strawberryShortcake.jpg",
    description: [
      "Strawberry Short Cake is one of our Top Sellers.",
      "3 layers of very soft sponge sandwiched with chunky fresh strawberries.",
      "Little Sour sweet strawberries with creamy and milky fresh cream.",
      "The perfect choice for strawberry shortcake lovers."
    ]
  },
  {
    name: "Earl Grey Lemon Apple",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "earlgreyLemonApple.jpg",
    description: [
      "Earl Grey infused fresh cream with apple pie filling, vanilla sponge & lemon curd.",
      "A simple yet elegant cake."
    ]
  },
  {
    name: "Blueberry Lavender",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "blueberryLavender.jpg",
    description: [
      "Relax your body and mind with a slice of Lavender Cake.",
      "3 layers of soft and fluffy vanilla sponge cake sandwiched with blueberry lavender fresh cream.",
      "Topped with fresh Blueberries."
    ]
  }
]

function CakeInfoDialog(props) {
  const { open, onClose, cake } = props

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="cake-info-dialog-wrapper">
        <DialogTitle>
          <div>
            <CloseIcon onClick={onClose} />
          </div>
        </DialogTitle>
        <DialogContent>
        <div className="row cake-info-dialog-content">
          <div className="cake-info-dialog-img col-sm-12 col-md-5">
            <img src={`${process.env.PUBLIC_URL}/images/cakes/${cake.image}`} alt="" className="cake-info-dialog-img"/>
          </div>
          <div className="cake-info-dialog-description col-sm-12 col-md-7">
            <p>{"Our signature item features 3 layers of soft sponge with quality rose infused fresh cream, sandwiched with the juiciest of lychees."}</p>
          </div>
        </div>
        </DialogContent>
      </div>
    </Dialog>
  )
}

export class CakeCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = (value) => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <>
        <div className="cake-card col-lg-4">
          <div className="cake-card-img-wrapper" onClick={this.handleClickOpen}>
            <img src={`${process.env.PUBLIC_URL}/images/cakes/${this.props.image}`} alt="" className="cake-card-img"/>
          </div>
          <div className="cake-card-info-wrapper">
            <span className="cake-card-title" onClick={this.handleClickOpen}>{this.props.name}</span>
            <p className="cake-card-price">6 inch: ${this.props.price.sixInch}, 8 inch: ${this.props.price.eightInch}</p>
          </div>
        </div>
        <CakeInfoDialog 
          open={this.state.open} 
          onClose={this.handleClose}
          cake={this.props}
        />
      </>
    )
  }
}

export function Cakes() {
  let cakeCards = []
  let id = 0
  for(const cake of cakes){
    cakeCards.push(
      <CakeCard 
        price={cake.price}
        name={cake.name}
        image={cake.imageFileName}
        description={cake.description}
        key={id}
      />
    )
    id++
  }

  return (
    <div>
      <div className="col-lg-6">
        <h1 className="section-title">Normal Cakes</h1>
      </div>
      <div>
        {cakeCards}
      </div>
    </div>
  )
}
