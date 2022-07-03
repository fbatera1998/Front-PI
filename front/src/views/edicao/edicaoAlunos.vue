<template>
  <div class="home">
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="row">
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
                  v-model="form.telefone"
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

                <button class="btn btn-primary" @click="executeEdit">Alterar</button>
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
export default {
  props: { id: String },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    executeLoad() {
      this.$http.get("/pessoas/" + this.id).then((res) => (this.form = res.data));
    },
    async BuscaCep() {
      let Adress = await ApiCep.searchAdress(this.form.cep);
      this.form.rua = Adress.logradouro;
      this.form.estado = Adress.uf;
      this.form.cidade = Adress.localidade;
      this.form.bairro = Adress.bairro;
    },
    executeEdit() {
      this.$http.put("/pessoas/" + this.id, this.form).then(() => {
        this.$swal("Cadastro Alterado", "", "success");
        this.$eventHub.$emit("editClose");
      });
    },
  },
  mounted() {
    this.executeLoad();
  },
};
</script>

<style></style>
