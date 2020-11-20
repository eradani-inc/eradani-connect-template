import { Router } from 'express';
import * as sqlController from '../../../controllers/sql';
import validate from '../../../middlewares/validate';
import respond from '../../../middlewares/respond';
import * as validators from './validators';

// You can set login requirements on an API endpoint by putting `requireAuth` after the URL specification
export default function mountSQL(router: Router) {
    router.get(
        '/people',
        validate(validators.getCustomers),
        respond((req: any) => sqlController.getCustomers(req.query))
    );
}
