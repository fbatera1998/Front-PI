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
                    <h4>Cadastrar Alunos</h4>
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
                    <label for="rua">Estado</label>
                    <input
                      name="estado"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.uf"
                    />
                    <label for="rua">Complemento</label>
                    <input
                      name="complemento"
                      type="text"
                      class="form-control form-control-alternative"
                      v-model="form.complemento"
                    />
                    <button class="btn btn-sucess" @click="SalvaPessoas">Salvar</button>
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
import ApiCep from "@/common/ViaCep";
import Alert from "@/common/Alert";
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
        celular: "",
      },
    };
  },
  methods: {
    async BuscaCep() {
      let Adress = await ApiCep.searchAdress(this.form.cep);
      this.form.rua = Adress.logradouro;
      this.form.estado = Adress.uf;
      this.form.cidade = Adress.localidade;
      this.form.bairro = Adress.bairro;
    },
    SalvaPessoas() {
      this.$http
        .post("pessoas", this.form)
        .then(() => {
          Alert.messageEnvio();
          this.$router.push("/home");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {},
};
</script>
