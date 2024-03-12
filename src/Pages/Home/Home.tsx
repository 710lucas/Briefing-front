import "./Home.css"
import { Api, BriefingState, BriefingType } from "../../utils/Api"
import { useEffect, useState } from "react"
import { Briefing } from "../Briefing/Briefing";
import Swal from 'sweetalert2'

import 'react-toastify/dist/ReactToastify.css';
import { EditModal } from "../EditModal/EditModal";

export function Home(){

    const [briefings, setBriefings] = useState<BriefingType[] | undefined>(undefined);
    const [createModal, setCreateModal] = useState<boolean>(false);

    const api : Api = new Api();

    useEffect(() => {
        loadBriefings();
    }, [])


    const loadBriefings = () => {

        api.getAll().then(response => {
            if(response.status == 200){
                return response.json();
            }
        }).then((body : BriefingType[]) => {

            let briefingsRequest : BriefingType[] = body;
            let briefingsAprovados : BriefingType[] = [];
            let briefingsFinalizados : BriefingType[] = [];
            let briefingsNegociados : BriefingType[] = [];

            for(let brief of briefingsRequest){
                if(brief.state == BriefingState.aprovado)
                    briefingsAprovados.push(brief);
                else if(brief.state == BriefingState.finalizado)
                    briefingsFinalizados.push(brief)
                else if(brief.state == BriefingState.negociacao)
                    briefingsNegociados.push(brief)
            }

            briefingsAprovados = briefingsAprovados.reverse()
            briefingsFinalizados = briefingsFinalizados.reverse()
            briefingsNegociados = briefingsNegociados.reverse()

            setBriefings(briefingsNegociados.concat(briefingsAprovados).concat(briefingsFinalizados))
        })

    }


    const handleSave = (notify? : string) => {
        loadBriefings()
    }

    const handleCreateButtonClick = () => {
        setCreateModal(true);
    }

    const handleCreateNewModal = (briefing? : BriefingType) => {
        if(!briefing){
            Swal.fire({
                title: "Houve um erro ao criar o briefing", 
                background: "var(--background-color)",
            })
            return;
        }
        api.create({
            clientName: briefing.client_name,
            description: briefing.description
        }).then((response) => {
            if(response.status == 200){
                Swal.fire({
                    toast: true,
                    title: "Briefing criado com sucesso",
                    position: "top-end",
                    timer: 1500,
                    background: "var(--sombra-color)",
                    color: "var(--text-color)",
                    confirmButtonColor: "var(--accent-color)"
                })
                setCreateModal(false);
                loadBriefings() ;
            }
            else{
                Swal.fire({
                   title: "Houve um erro ao criar o briefing", 
                   background: "var(--background-color)",
                })
            }
        })
    }

    return (

        <div className="home-page">

            <div className="title">
                Gestor de Briefings
            </div>

            <div className="create-button" onClick={handleCreateButtonClick}>
                Adicionar briefing
            </div>

            <div className="briefings-container">

                {
                    briefings?.map((b, key) => (
                        <Briefing briefing={b} key={key} whenSaved={handleSave}/>
                    ))
                }

            </div>

            {
                createModal 
                ?
                    <EditModal 
                        title="Criar Briefing"
                        closeAction={() => {setCreateModal(false)}}
                        saveAction={(briefing? : BriefingType) => {handleCreateNewModal(briefing)}}
                    />
                : 
                    <></>

            }



        </div>

    )

}