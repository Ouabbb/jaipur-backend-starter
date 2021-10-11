import * as gameService from "../services/gameService"

// TODO: Mock lodash shuffle

describe("Game service", () => {
  test("should put camels from hand to herd", () => {
    const game = {
        _players:[
            { hand:["camel","gold"], camelsCount :0},
            { hand: ["gold","gold"], camelsCount :0},
        ],
    }
    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(1)
    expect(game._players[0].hand).toStrictEqual(["gold"])
    expect(game._players[0].camelsCount).toEqual(1)
    expect(game._players[1].hand.length).toBe(2)
    expect(game._players[1].hand).toStrictEqual(["gold","gold"])
    expect(game._players[1].camelsCount).toEqual(0)
  })
  test("should put camels from hand to herd", () => {
    const game = {
        _players:[
            { hand:["camel"], camelsCount :0},
            { hand: [], camelsCount :0},
        ],
    }
    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(0)
    expect(game._players[0].hand).toStrictEqual([])
    expect(game._players[0].camelsCount).toEqual(1)
    expect(game._players[1].hand.length).toBe(0)
    expect(game._players[1].hand).toStrictEqual([])
    expect(game._players[1].camelsCount).toEqual(0)
  })

  test("should init a deck", () => {
    const deck = gameService.initDeck()
    expect((deck.filter(card => card == "camel")).length).toEqual(8)
    expect((deck.filter(card => card == "diamonds")).length).toEqual(6)
    expect((deck.filter(card => card == "gold")).length).toEqual(6)
    expect((deck.filter(card => card == "silver")).length).toEqual(6)
    expect((deck.filter(card => card == "cloth")).length).toEqual(8)
    expect((deck.filter(card => card == "spice")).length).toEqual(8)
    expect((deck.filter(card => card == "leather")).length).toEqual(10)
  })

  test("should draw cards", () => {
    const deck = gameService.initDeck()
    const drewCards = gameService.drawCards(deck,3)
    expect(drewCards.length).toEqual(3)
  })
})
