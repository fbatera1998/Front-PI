<template>
  <div class="home">
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="card shadow">
              <div class="card-header border-0">
                <div class="row">
                  <div class="col-xl-12">
                    <h4>Cadastrar Docentes</h4>
                  </div>
                  <div class="form">
                    <label for="nome">Nome</label>
                    <input
                      name="nome"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.nome"
                    />
                    <label for="email">Email</label>
                    <input
                      name="email"
                      class="form-control form-control-alternative"
                      type="email"
                      v-model="form.email"
                    />
                    <label for="telefone">Telefone</label>
                    <input
                      name="telefone"
                      class="form-control form-control-alternative"
                      type="tel"
                      v-model="form.celular"
                    />
                    <label for="CPF">CPF</label>
                    <input
                      name="CPF"
                      type="number"
                      class="form-control form-control-alternative"
                      v-model="form.cpf"
                    />
                    <label for="cep">CEP</label>
                    <input
                      name="cep"
                      type="number"
                      class="form-control form-control-alternative"
                      v-model="form.cep"
                      @change="BuscaCep"
                    />
                    <label for="rua">Rua</label>
                    <input
                      name="rua"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.rua"
                    />
                    <label for="rua">Numero</label>
                    <input
                      name="numero"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.numero"
                    />
                    <label for="rua">Bairro</label>
                    <input
                      name="bairro"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.bairro"
                    />
                    <label for="rua">Cidade</label>
                    <input
                      name="cidade"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.cidade"
                    />
                    <label for="rua">Complemento</label>
                    <input
                      name="complemento"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.complemento"
                    />
                    <button class="btn btn-success" @click="SalvaPessoas">Salvar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import ApiCep from "@/common/ViaCep";
export default {
  name: "HomeView",
  data() {
    return {
      form: {
        nome: "",
        email: "",
        role: "",
        cpf: "",
        rua: "",
        numero: "",
        cidade: "",
        telefone: "",
      },
    };
  },
  validations: {
    form: {
      nome: {
        required,
        minLength: minLength(11),
      },
      email: {
        required,
        minLength: minLength(2),
      },
      cpf: {
        required,
        minLength: minLength(11),
      },
      rua: {
        required,
        minLength: minLength(2),
      },
      numero: {
        required,
        minLength: minLength(2),
      },
      cidade: {
        required,
        minLength: minLength(3),
      },
      celular: {
        required,
        minLength: minLength(11),
      },
      cep: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    async BuscaCep() {
      this.$v.$touch();
      if (!this.$v.form.cep.$error) {
        let Adress = await ApiCep.searchAdress(this.form.cep);
        this.form.rua = Adress.logradouro;
        this.form.estado = Adress.uf;
        this.form.cidade = Adress.localidade;
        this.form.bairro = Adress.bairro;
      } else {
        this.$swal(
          "CEP fora do formato!!",
          "para que seja feita a pesquisa corretamente, precisam ser preenchidos 11 (onze) números!",
          "error"
        );
      }
    },
    SalvaPessoas() {
      this.$v.$touch();
      if (this.$v.form.$anyError) {
        this.$swal(
          "Existem informações fora do padrão ",
          "Retorne e confira as informações antes de salvar!!",
          "error"
        );
        return;
      }
      this.$http
        .post("docentes", this.form)
        .then(() => {
          this.$swal(
            "Docente Cadastrado com Sucesso!!",
            "Você será redirecionado para a lista de cadastros",
            "success"
          );
          this.$router.push("/ListaDocentes");
        })
        .catch((err) => this.$swal("Ocorreu um erro!!", err.message, "error"));
    },
  },
  mounted() {},
};
</script>
