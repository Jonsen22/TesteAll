import React, { useState, useEffect } from "react";
import jsonDados from "../data/data.json";
import "./Grafico.css";
import Barplot from "./Barplot";

const Grafico = () => {
  // console.log(jsonDados)

  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [vendas, setVendas] = useState([]);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [marcaSelecionada, setMarcaSelecionada] = useState("");

  useEffect(() => {
    setCategorias(jsonDados.data);

    if (jsonDados.data.length > 0) {
      const primeiraCategoria = jsonDados.data[0];
      setCategoriaSelecionada(primeiraCategoria.categoria);
      setProdutos(primeiraCategoria.produtos);

      if (primeiraCategoria.produtos.length > 0) {
        const primeiroProduto = primeiraCategoria.produtos[0];
        setProdutoSelecionado(primeiroProduto.produto);
        setMarcas(primeiroProduto.marcas);

        if (primeiroProduto.marcas.length > 0) {
          const primeiraMarca = primeiroProduto.marcas[0];
          setMarcaSelecionada(primeiraMarca.marca);
          setVendas(primeiraMarca.vendas);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (categoriaSelecionada) {
      const categoriaEncontrada = categorias.find(
        (categoria) => categoria.categoria === categoriaSelecionada
      );
      if (categoriaEncontrada) {
        setProdutos(categoriaEncontrada.produtos);
        setProdutoSelecionado(categoriaEncontrada.produtos[0].produto);
      }
    } else {
      setProdutos([]);
      setProdutoSelecionado("");
    }
  }, [categoriaSelecionada, categorias]);

  useEffect(() => {
    if (produtoSelecionado) {
      const produtoEncontrado = produtos.find(
        (produto) => produto.produto === produtoSelecionado
      );
      if (produtoEncontrado) {
        setMarcas(produtoEncontrado.marcas);
        setMarcaSelecionada(produtoEncontrado.marcas[0].marca);
      }
    } else {
      setMarcas([]);
      setMarcaSelecionada("");
    }
  }, [produtoSelecionado, produtos]);

  useEffect(() => {
    if (marcaSelecionada) {
      const marcaEncontrada = marcas.find(
        (marca) => marca.marca === marcaSelecionada
      );
      if (marcaEncontrada) {
        setVendas(marcaEncontrada.vendas);
      }
    } else {
      setVendas({});
    }
  }, [marcaSelecionada, marcas]);

  const handleCategoriaChange = (e) => {
    setCategoriaSelecionada(e.target.value);
  }

  const handleProdutoChange = (e) => {
    setProdutoSelecionado(e.target.value);
  };

  const handleMarcaChange = (e) => {
    setMarcaSelecionada(e.target.value);
  };

  return (
    <div className="grafico-container">
      <div className="dropDowns">
        <div className="Categoria">
          <span>Categoria:</span>
          <select
            id="categoria"
            value={categoriaSelecionada}
            onChange={handleCategoriaChange}
          >
            {jsonDados.data.map((categoria) => (
              <option key={categoria.categoria} value={categoria.categoria}>
                {categoria.categoria}
              </option>
            ))}
          </select>
        </div>

          <div className="Producto">
            <span>Produto:</span>
            <select
              id="produto"
              value={produtoSelecionado}
              onChange={handleProdutoChange}
            >
             {produtos.map((produto) => (
                <option key={produto.produto} value={produto.produto}>
                  {produto.produto}
                </option>
              ))}
            </select>
          </div>

          <div className="Marca">
            <span>Marca:</span>
            <select
              id="marca"
              value={marcaSelecionada}
              onChange={handleMarcaChange}
            >
              {marcas.map((marca) => (
                <option key={marca.marca} value={marca.marca}>
                  {marca.marca}
                </option>
              ))}
            </select>
          </div>

      </div>
      <div className="grafico">
        <h1>Sales By Month For:</h1>
      </div>
      {vendas ? (
        <Barplot vendas={vendas}/>
      ):(
        <></>
      )}
      
    </div>
  );
};

export default Grafico;
