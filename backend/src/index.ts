const express = require('express')
import AppDataSource from './data-source';

import { Warning } from "./Warning"

const runServer = async () => {
    const APP_PORT = 3000;
    const app = express();
    app.use(express.json());

    await AppDataSource.initialize();
    const warningRepository = AppDataSource.getRepository(Warning);

    app.get('/', async (req: any, res: any) => {
        res.json(await warningRepository.findBy({
            infrator: req.query.infrator,
            conteudo: req.query.conteudo,
            relator: req.query.relator,
        }));
    });

    app.post('/', async (req: any, res: any) => {
        const { infrator, conteudo, descricao, relator } = req.body;
        if (!infrator || !conteudo || !relator) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        const warning = new Warning();
        warning.infrator = infrator;
        warning.conteudo = conteudo;
        warning.descricao = descricao || "";
        warning.relator = relator;

        await warningRepository.save(warning);

        return res.json(warning);
    });

    app.delete('/:id', async (req: any, res: any) => {
        await warningRepository
            .createQueryBuilder()
            .delete()
            .from(Warning)
            .where("id = :id", { id: req.params.id })
            .execute();

        return res.status(200).send();
    });

    app.listen(APP_PORT, () => {
        console.log(`Servidor rodando localhost:${APP_PORT}`)
    });
};

runServer();
