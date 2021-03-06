import createjs from 'createjs-easeljs'
import {Bradley, BRADLEY_ID} from '../sprite/bradley'

const manifest = (id) => ({id: id, src: `${id}.png`})

const BACKGROUND = manifest('background')
const FEEDBACK = manifest('feedback_logo')
const LEVEL1 = manifest('level1')
const ENTRANCE_FRONT = manifest('entrance_front')
const RECEPTIONIST = manifest('receptionist')
const OFFICIAL_ENTRANCE = manifest('official_entrance')
const TREE = manifest('tree')
const BRADLEY = manifest(BRADLEY_ID)

export default {
  beforeLoad (assets) {
    assets.manifest = [
      BACKGROUND,
      FEEDBACK,
      LEVEL1,
      TREE,
      RECEPTIONIST,
      BRADLEY,
      ENTRANCE_FRONT,
      OFFICIAL_ENTRANCE
    ]
  },
  loaded (assets, stage) {
    this.background = new createjs.Shape()
    // this.background.graphics.beginBitmapFill(assets.get(BACKGROUND.id)).drawRect(0, 0, stage.canvas.width, stage.canvas.height)
    this.background.graphics.beginBitmapFill(assets.get(LEVEL1.id)).drawRect(0, 0, stage.canvas.width, stage.canvas.height)

    this.feedback = new createjs.Bitmap(assets.get(FEEDBACK.id))
    this.feedback.regY = 217
    this.feedback.x = 32
    this.feedback.y = 32 * 26

/*
    this.text = new createjs.Text('FEEDBACK', '256px Six Caps', '#FAFAFA')
    this.text.x = 32
    this.text.y = 32 * 16
    this.text.textBaseline = 'alphabetic'
*/
/*
    this.entranceFront = new createjs.Bitmap(assets.get(ENTRANCE_FRONT.id))
    this.entranceFront.x = 288 - this.entranceFront.image.width
    this.entranceFront.y = 32 * 27 - this.entranceFront.image.height

    this.receptionist = new createjs.Bitmap(assets.get(RECEPTIONIST.id))
    this.receptionist.x = 640 - this.receptionist.image.width
    this.receptionist.y = 32 * 27 - this.receptionist.image.height

    this.officialEntrance = new createjs.Bitmap(assets.get(OFFICIAL_ENTRANCE.id))
    this.officialEntrance.x = 1024 - this.officialEntrance.image.width
    this.officialEntrance.y = 32 * 27 - this.officialEntrance.image.height

    this.tree = new createjs.Bitmap(assets.get(TREE.id))
    this.tree.x = 974 - this.tree.image.width
    this.tree.y = 32 * 27 - this.tree.image.height
*/
    this.bradley = new Bradley(assets.get(BRADLEY.id))
    this.bradley.x = 32
    this.bradley.y = 32 * 9

    stage.addChild(
      this.background,
      // this.tree,
      // this.receptionist,
      this.bradley,
      this.feedback
      // this.entranceFront,
      // this.officialEntrance
    )
  },

  ticked (playground) {
    this.bradley.ticked(playground)
  }
}

