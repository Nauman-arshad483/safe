import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Audit } from "../../../types/types";
import AuditInfo from "../../../components/UI/auditInfo";

const SingleAuditInfo: NextPage = () => {
  const router = useRouter();
  const { auditId } = router.query;
  const [audit, setAudit] = useState<Audit>();

  const singleAuditInfo = async () => {
    await axios
      .get(`http://localhost:3000/api/audit/${auditId}`)
      .then((resp) => {
        setAudit(resp.data);
        console.log(resp.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    singleAuditInfo()
  },[])

  return <>{
    audit ? <AuditInfo audit={audit!} auditId={auditId!}/> : <></>
  }
  
  </>;
};

export default SingleAuditInfo;
