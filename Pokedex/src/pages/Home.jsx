import React, { useEffect, useState } from 'react'
import PokemomCard from '../components/PokemomCard'
import Navbar from '../components/Navbar'
import { Container, Grid } from '@mui/material'
import axios from "axios"
import { Skeletons } from '../components/Skeletons'
//import {Box, Container} from "@mui/system"


export const Home = () => {

  const [pokemons, setPokemons] = useState([])

  const getPokemons = () => {

    var endpoints = []
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))

    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    //   .then((res) => setPokemons(res.data.results))
    //   .catch((err) => console.error(err))
  }

  const pokemonFilter = (name) => {
    var filteredPokemons = []
    if (name === "") {
      getPokemons()
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false"  >
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (<Skeletons />) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <PokemomCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
              </Grid>
            ))
          )}

        </Grid>
      </Container>
    </div>

  )
}
