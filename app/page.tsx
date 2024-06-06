"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Plus } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';

interface FormData {
  nome: string;
  cpf: string;
  endereco: string;
  dataNascimento: string;
  email: string;
  telefone: string;
  dataEntrada: string;
  situacao: string;
  veiculo?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  cnpj?: string;
}

export default function Clientes() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
    console.log(data);

  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Cadastro de Clientes</h1>
      <Row className="mb-4">
        <Col>
          <Button variant="primary">
            <Plus className="mr-2" />
            Cadastrar Cliente
          </Button>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit, onError)} className="bg-white p-4 rounded shadow">
        <Row>
          <Col md={6}>
            <Form.Group controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" {...register('nome', { required: "Nome é requerido." })} />
              {errors.nome && <span className="text-red-700">{errors.nome.message}</span>}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="cpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" {...register('cpf', { required: "CPF é requerido." })} />
              {errors.cpf && <span className="text-red-700">{errors.cpf.message}</span>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="endereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control type="text" {...register('endereco', { required: "Endereço é requerido." })} />
              {errors.endereco && <span className="text-red-700">{errors.endereco.message}</span>}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dataNascimento">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" {...register('dataNascimento', { required: "Data de Nascimento é requerida." })} />
              {errors.dataNascimento && <span className="text-red-700">{errors.dataNascimento.message}</span>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" {...register('email', { required: "Email é requerido." })} />
              {errors.email && <span className="text-red-700">{errors.email.message}</span>}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" {...register('telefone', { required: "Telefone é requerido." })} />
              {errors.telefone && <span className="text-red-700">{errors.telefone.message}</span>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="dataEntrada">
              <Form.Label>Data de Entrada na Plataforma</Form.Label>
              <Form.Control type="date" {...register('dataEntrada', { required: "Data de Entrada é requerida." })} />
              {errors.dataEntrada && <span className="text-red-700">{errors.dataEntrada.message}</span>}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="situacao">
              <Form.Label>Situação do Cliente</Form.Label>
              <Form.Control as="select" {...register('situacao', { required: "Situação é requerida." })}>
                <option value="">Selecione...</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </Form.Control>
              {errors.situacao && <span className="text-red-700">{errors.situacao.message}</span>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="veiculo">
              <Form.Label>Veículo</Form.Label>
              <Form.Control type="text" {...register('veiculo')} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="cnpj">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control type="text" {...register('cnpj')} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="razaoSocial">
              <Form.Label>Razão Social</Form.Label>
              <Form.Control type="text" {...register('razaoSocial')} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="nomeFantasia">
              <Form.Label>Nome Fantasia</Form.Label>
              <Form.Control type="text" {...register('nomeFantasia')} />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" className="mt-3">Cadastrar</Button>
      </Form>
    </Container>
  );
}

