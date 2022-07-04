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
                    <h4>Lista de Docentes Cadastrados</h4>
                  </div>
                  <div class="col-xl-12">
                    <table
                      id="exportTable_table"
                      class="table align-items-center table-flush table-hover w-100"
                    >
                      <thead class="thead-light">
                        <tr>
                          <th class="adjust-center-table" width="150">
                            <b-icon icon="gear"></b-icon>
                          </th>
                          <th class="adjust-th">ID</th>
                          <th class="adjust-th">Nome</th>
                          <th class="adjust-th">Data de Cadastro</th>
                          <th class="adjust-th">Ultima Atualização</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in lista" :key="item.id">
                          <td class="adjust-td">
                            <button class="btn btn-primary" @click="OpenEdit(item.id)">
                              <b-icon icon="folder-plus"></b-icon>
                            </button>
                            <button
                              class="btn btn-danger"
                              @click="openDialogRemove(item.id)"
                            >
                              <b-icon icon="x-square"></b-icon>
                            </button>
                          </td>
                          <td class="adjust-td">{{ item.id }}</td>
                          <td class="adjust-td">{{ item.nome }}</td>
                          <td class="adjust-td">
                            {{ item.createdAt | moment("DD/MM/YYYY HH:mm") }}
                          </td>
                          <td class="adjust-td">
                            {{ item.updatedAt | moment("DD/MM/YYYY HH:mm") }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <b-modal
                    id="modal-edit"
                    hide-footer
                    :no-close-on-backdrop="true"
                    :no-close-on-esc="true"
                    centered
                    v-model="modalShow"
                    size="lg"
                    title="Edição de Docentes"
                  >
                    <edit-docente :id="this.idEdit"></edit-docente>
                  </b-modal>

                  <b-modal
                    :no-close-on-backdrop="true"
                    :no-close-on-esc="true"
                    centered
                    v-model="dialogRemove"
                    title="Confirmação"
                  >
                    <p>Tem certeza que deseja remover este registro?</p>
                    <template slot="modal-footer">
                      <button class="btn btn-danger btn-block" @click="executeRemove()">
                        <i class="far fa-trash-alt"></i>
                        Remover
                      </button>
                    </template>
                  </b-modal>
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
/* componentes de edição*/
import EditDocente from "@/views/edicao/edicaoDocentes.vue";
// import Message from "@/common/Alert";
/* # */
export default {
  components: { EditDocente },
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
      lista: {},
      idEdit: "",
      idDelet: "",
      dialogRemove: false,
      modalShow: false,
    };
  },
  methods: {
    OpenEdit(id) {
      this.idEdit = String(id);
      this.modalShow = true;
    },
    openDialogRemove(id) {
      this.idDelet = String(id);
      this.dialogRemove = true;
    },
    executeRemove() {
      this.$http.delete("/docentes/" + this.idDelet).then(() => {
        this.dialogRemove = false;
        this.executeLoad();
      });
    },
    executeLoad() {
      this.$http.get("/docentes").then(
        (res) => {
          this.lista = res.data;
        },
        (err) => {
          this.swal("Erro", err, "error");
        }
      );
    },
  },
  created() {
    this.$eventHub.$on("editClose", () => {
      this.modalShow = false;
      this.executeLoad();
    });
  },
  mounted() {
    this.executeLoad();
  },
};
</script>
