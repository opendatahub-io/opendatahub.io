---
layout: docs
title: Services
permalink: /docs/ai-library/services
style_class: ai-library
---

### Requesting Predictions
The AI services each have a route to the Seldon service.  To create a prediction a `POST` request to the route under the path `/api/v0.1/predictions`.  For instance, the flake analysis route on a CRC cluster in the Project `odh' will look something like:
```
https://regrclassifier-odh.apps-crc.testing/api/v0.1/predictions
```

Models vary according to each service, but often, data is passed in through a field `strData` and parsed by the model accordingly.  Within this `strData` field, most models require the a list of key value pairs separated by commas.  For this reason, strData must have any other commas stripped out.  Two common keys are `model` and `data`.  A simple JSON body would look like:
```json
{"strData":"model=healthpredictor/model.pkl, data=66:150"}
```

Putting that together in a curl command:
```bash
curl 'https://regrclassifier-odh.apps-crc.testing/api/v0.1/predictions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{"strData":"model=healthpredictor/model.pkl, data=66:150"}'
```

Sample Output:
```json
{
  "meta": {
    "puid": "k8h9uir10qdbsmv1qigp2qnk5l",
    "tags": {},
    "routing": {},
    "requestPath": {
      "c-regrclassifier": "quay.io/opendatahub/regression_predict"
    },
    "metrics": []
  },
  "data": {
    "names": [],
    "tensor": {
      "shape": [
        1
      ],
      "values": [
        2.2885771963212247
      ]
    }
  }
}
```

### Service Documentation
As each service varies, please visit the documentation for the service and model.
- [Anomaly Detection](https://gitlab.com/opendatahub/ai-library/tree/master/anomaly_detection)
- [Association Rule Learning](https://gitlab.com/opendatahub/ai-library/tree/master/association_rule_learning)
- [Correlation Analysis](https://gitlab.com/opendatahub/ai-library/tree/master/correlation_analysis)
- Duplicate Bug Prediction
  - [Predictions](https://gitlab.com/opendatahub/ai-library/tree/master/duplicate_bug_predict)
  - [Training](https://gitlab.com/opendatahub/ai-library/tree/master/duplicate_bug_train)
- Flake Analysis
  - [Prediction](https://gitlab.com/opendatahub/ai-library/tree/master/flakes_predict)
  - [Training](https://gitlab.com/opendatahub/ai-library/tree/master/flakes_train)
- [Fraud Detection](https://gitlab.com/opendatahub/ai-library/tree/master/fraud_detection)
- [Matrix Factorization](https://gitlab.com/opendatahub/ai-library/tree/master/matrix_factorization)
- [Regression Analysis](https://gitlab.com/opendatahub/ai-library/tree/master/regression_predict)
  - [Prediction](https://gitlab.com/opendatahub/ai-library/tree/master/regression_predict)
  - [Training](https://gitlab.com/opendatahub/ai-library/tree/master/regression_train)
- [Sentiment Analysis](https://gitlab.com/opendatahub/ai-library/tree/master/sentiment_analysis)
- [Topic Modeling](https://gitlab.com/opendatahub/ai-library/tree/master/topic_model)


{% include next-link.html label="Administration" url="/docs/administration/installation-customization/customization.html" %}
