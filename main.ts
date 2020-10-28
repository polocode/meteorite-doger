namespace SpriteKind {
    export const pellet = SpriteKind.create()
    export const Projectille = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.pellet, SpriteKind.Projectille, function (sprite, otherSprite) {
    Meteorite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 8 8 . . . . . 
        . . . . . 1 1 1 1 1 8 8 . . . . 
        . . . . 1 1 1 1 1 8 8 8 8 1 . . 
        . . . . . . . . 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, MechWarrior, 50, 0)
    Bullet.setKind(SpriteKind.pellet)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let Bullet: Sprite = null
let Meteorite: Sprite = null
let MechWarrior: Sprite = null
MechWarrior = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 a . . . . 
    1 1 1 1 1 8 8 8 8 1 8 8 a . . . 
    1 1 1 1 a 8 8 8 8 8 8 8 a . . . 
    1 1 1 1 a 8 8 8 8 8 8 1 a . . . 
    1 1 1 1 1 1 8 8 8 8 a b 1 c c . 
    1 1 1 1 a 1 8 8 a b b b b b c . 
    1 1 a a a b 1 1 1 b b b b d c . 
    1 a a 8 8 d b a 8 1 1 1 1 b c . 
    . a a 8 8 d b a a a c c c . . . 
    . b 1 1 a a 8 8 a a c . . . . . 
    . . b d d 8 8 8 b b b d d . . . 
    a a b d d a a a . b b d d . . . 
    a a a b b b b b . . . . . . . . 
    a a . . . . b b b . . . . . . . 
    . . . . . . b b b b . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(MechWarrior, 0, 100)
MechWarrior.setPosition(30, 60)
MechWarrior.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    Meteorite = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, randint(-50, -100), 0)
    Meteorite.y = randint(0, scene.screenHeight())
})
